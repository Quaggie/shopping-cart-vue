import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routeMapper } from './router';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = routeMapper(VueRouter);

router.start(App, 'body');
