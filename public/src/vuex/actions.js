import Vue from 'vue';
import { get } from '../services/localStorage';

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export const developerInfo = makeAction('DEVELOPER_INFO');
export const removeDeveloper = makeAction('REMOVE_DEVELOPER');
export const editDeveloper = makeAction('EDIT_DEVELOPER');
export const removeAllDevelopers = makeAction('REMOVE_ALL_DEVELOPERS');

export const getAllDevelopers = (store) => {
  return Vue.http.post('/dev/find')
  .then( (developers) => store.dispatch('GET_ALL_DEVELOPERS', developers))
  .catch( (err) => store.dispatch('SEND_ERROR_MESSAGE', err));
}

export const addDeveloper = (store, developer) => {
  if (!developer.trim()) return store.dispatch({ type:'SEND_ERROR_MESSAGE', payload: 'Digite um nome.'});

  return Vue.http.get(`https://api.github.com/search/users?q=${developer}`)
  .then( (result) => {
    const json = result.data;
    console.log(json);
    const user = json.total_count ? json.items[0] : {};
    if (!user.login) throw 'Parece que este desenvolvedor não existe';
    if (get(developer)) throw 'Desenvolvedor já existe na lista!';

    const dev = {
      username: user.login,
      price: parseInt(String(user.score).substring(0, String(user.score).indexOf('.'))),
      imageUrl: user.avatar_url
    };

    return Vue.http.post('/dev/save', dev)
    .then( (result) => {
      console.log(result);
      // Sending it to the store
      store.dispatch({
        type: 'ADD_DEVELOPER',
        payload: dev
      });
      store.dispatch({
        type: 'UPDATE_NEW_DEVELOPER',
        payload:''
      });
    });
  })
  .catch( (err) => {
    store.dispatch({
      type: 'SEND_ERROR_MESSAGE',
      payload: err
    });
  });
};
