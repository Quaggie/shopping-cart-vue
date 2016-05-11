<template>
  <router-view></router-view>
</template>

<script>
import Cart from './components/Cart.vue';
import DevPage from './components/DevPage.vue';
import store from './vuex/store';

  export default {
    store,
    components: { Cart, DevPage},
    replace: false
  }
</script>
