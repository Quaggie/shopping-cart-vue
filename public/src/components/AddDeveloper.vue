<template>

  <alert
    :show.sync="error"
    :duration="4000"
    type="danger"
    width="350px"
    placement="top-right"
    dismissable
  >
    <span class="icon-ok-circled alert-icon-float-left"></span>
    <strong>Ops!</strong>
    <p>{{ errorMessage }}</p>
  </alert>

  <h2>Add a developer</h2>
  <form class="form-inline" role="form" @submit.prevent="addDeveloper(newDeveloper)">
    <div class="form-group">
      <input :value="newDeveloper" @input="updateNewDeveloper" type="text" placeholder="GitHub Username" class="form-control">
    </div>
    <button type="submit" class="btn btn-success">Add</button>
  </form>
</template>

<script>
  import { alert } from 'vue-strap';
  import { addDeveloper } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        showError: (store) => store.cart.showError,
        errorMessage: (store) => store.cart.errorMessage,
        newDeveloper: (store) => store.cart.newDeveloper
      },
      actions: {
        addDeveloper,
        updateNewDeveloper: ({ dispatch}, e) => dispatch('UPDATE_NEW_DEVELOPER', e.target.value)
      }
    },
    computed: {
      error () {
        return this.showError;
      }
    },
    components: { alert }
  }
</script>
