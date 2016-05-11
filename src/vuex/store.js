import Vue from 'vue';
import Vuex from 'vuex';
import { get, getAll, add, edit, remove, removeAll } from '../services/localStorage';

Vue.use(Vuex);

const state = {
  developers: getAll(),
  showError: false,
  errorMessage: '',
  newDeveloper: ''
};

const mutations = {
  ADD_DEVELOPER (state, developer) {
    const dev = Object.assign({}, developer);
    add(dev);
    state.developers.push(dev);
  },
  DEVELOPER_INFO (state, developer) {
    console.log(get(developer));
  },
  REMOVE_DEVELOPER (state, developer) {
    const dev = get(developer);
    state.developers.$remove(developer);
    remove(dev);
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

export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
});
