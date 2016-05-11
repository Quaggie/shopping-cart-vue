import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import logger from './middlewares/logger';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cart },
  middlewares: process.env.NODE_ENV !== 'production'
    ? [logger]
    : [],
  strict: process.env.NODE_ENV !== 'production'
});
