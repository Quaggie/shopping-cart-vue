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
import LocalStorage from './services/localStorage';

  export default {
    created () {
      console.log('created!');
    },
    ready () {
      this.getAllDevelopers();
      console.log('Ready!');
    },
    data () {
      return {
        developers: []
      }
    },
    methods: {
      getAllDevelopers () {
        LocalStorage.getAll()
        .then( (devs) => this.developers = devs)
        .catch( (err) => this.$broadcast('errorAlert', err) );
      },
      removeAllDevelopers () {
        LocalStorage.removeAll()
        .then( (devs) => this.developers = [])
        .catch( (err) => this.$broadcast('errorAlert', err) );
      }
    },
    events: {
      removeDeveloper (dev) {
        LocalStorage.remove(dev)
        .then( () => this.developers.$remove(dev))
        .catch( (err) => this.$broadcast('errorAlert', err) );
      },
      addDeveloper (dev) {
        LocalStorage.save(dev)
        .then( () => this.developers = this.developers.concat(dev).sort())
        .catch( (err) => this.$broadcast('errorAlert', err) );
      },
      showInfo (dev) {
        console.log(dev.username, dev.price, dev.imageUrl);
      }
    },
    components: { AddDeveloper, UserList, TotalResult }
  }
</script>
