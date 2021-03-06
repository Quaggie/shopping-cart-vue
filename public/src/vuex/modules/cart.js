import { get, getAll, add, edit, remove, removeAll } from '../../services/localStorage';

const state = {
  developers: [],
  showError: false,
  errorMessage: '',
  newDeveloper: ''
};

const mutations = {
  GET_ALL_DEVELOPERS (state, {data}) {
    // state.developers = getAll()
    state.developers = data;
  },
  ADD_DEVELOPER (state, developer) {
    const dev = Object.assign({}, developer);
    add(dev);
    state.developers.push(dev);
  },
  DEVELOPER_INFO (state, developer) {
    console.log(get(developer));
  },
  REMOVE_DEVELOPER (state, developer) {
    // const dev = get(developer);
    // remove(dev);
    state.developers.$remove(developer);
  },
  EDIT_DEVELOPER (state, developer) {
    let dev = get(developer.username);
    const modified = Object.assign({}, dev);
    dev = edit(modified);
  },
  REMOVE_ALL_DEVELOPERS (state) {
    removeAll();
    state.developers = [];
  },
  SEND_ERROR_MESSAGE (state, msg) {
    state.showError = true;
    state.errorMessage = msg;
    setTimeout( () => state.showError = false, 4000);
  },
  UPDATE_NEW_DEVELOPER (state, dev) {
    state.newDeveloper = dev;
  }
}

export default {
  state,
  mutations
}
