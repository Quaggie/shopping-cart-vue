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
import AddDeveloper from './AddDeveloper.vue';
import UserList from './UserList.vue';
import TotalResult from './TotalResult.vue';
import LocalStorage from '../services/localStorage';
import { getAllDevelopers } from '../vuex/actions';

  export default {
    created () {
      this.getAllDevelopers();
    },
    vuex: {
      getters: {
        developers: ({cart}) => cart.developers
      },
      actions: { getAllDevelopers }
    },
    components: { AddDeveloper, UserList, TotalResult }
  }
</script>
