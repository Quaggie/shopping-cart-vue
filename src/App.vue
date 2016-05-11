<template>
  <div class="container">

    <div class="row">
      <h1>Dev Shop</h1>
    </div>

    <div class="row">
      <add-developer></add-developer>
    </div>

    <div class="cart row">
      <h2>Cart</h2>
      <div v-show="developers.length">
        <user-list :developers="developers"></user-list>
      </div>
      <div v-else>
        <p>Insira um desenvolvedor acima</p>
      </div>
    </div>

    <div class="totalizer row">
      <div class="col-sm-5">
        <div class="row">
          <total-result :developers="developers"></total-result>
        </div>
      </div>
    </div>

  </div> <!-- /container -->
</template>

<script>
import AddDeveloper from './components/AddDeveloper.vue';
import UserList from './components/UserList.vue';
import TotalResult from './components/TotalResult.vue';
import LocalStorage from './services/localStorage';

  export default {
    vuex: {
      getters: {
        developers: (state) => state.cart.developers
      }
    },
    components: { AddDeveloper, UserList, TotalResult }
  }
</script>
