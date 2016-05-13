import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import Cart from './components/Cart.vue';
import DevPage from './components/DevPage.vue';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  scrollPosition: true
});

router.map({
  '/cart': {
    name: 'cart',
    component: Cart
  },
  '/dev/:dev': {
    name: 'devPage',
    component: DevPage
  }
});

router.redirect({
  '*': '/cart'
})

router.start(App, 'body')
