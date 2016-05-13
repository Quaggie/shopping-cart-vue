'use strict';

import Cart from './components/Cart.vue';
import DevPage from './components/DevPage.vue';

export function routeMapper (VueRouter) {
  const router = new VueRouter({
    history: true,
    scrollPosition: true
  });

  router.map({
    '/dev': {
      name: 'cart',
      component: Cart
    },
    '/dev/:dev': {
      name: 'devPage',
      component: DevPage
    }
  });

  router.redirect({
    '*': '/dev'
  })

  return router;
}
