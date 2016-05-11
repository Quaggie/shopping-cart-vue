import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-resource';
import store from './vuex/store';

Vue.use(vueResource);

new Vue({
  store,
  el: 'body',
  components: { App }
});
