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
      <user-list :developers="developers"></user-list>
    </div>

    <div class="totalizer row">
      <div class="col-sm-5">
        <div class="row">
          <total-result></total-result>
        </div>
      </div>
    </div>

  </div> <!-- /container -->
</template>

<script>
import AddDeveloper from './components/AddDeveloper.vue';
import UserList from './components/UserList.vue';
import TotalResult from './components/TotalResult.vue';

  export default {
    data () {
      return {
        developers: [
          {
            username: 'Quaggie',
            price: 100
          },
          {
            username: 'Delpp',
            price: 120
          }
        ]
      }
    },
    events: {
      removeDeveloper (dev) {
        this.developers.$remove(dev);
      },
      addDeveloper (dev) {
        this.developers = this.developers.concat(dev);
      }
    },
    components: { AddDeveloper, UserList, TotalResult }
  }
</script>
