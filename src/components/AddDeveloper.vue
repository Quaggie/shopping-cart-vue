<template>
  <h2>Add a developer</h2>
  <form class="form-inline" role="form" @submit.prevent="add">
    <div class="form-group">
      <input v-model="developer.username" type="text" placeholder="GitHub Username" class="form-control">
    </div>
    <div class="form-group">
      <input v-model="developer.price" type="text" placeholder="Price" class="form-control">
    </div>
    <button type="submit" class="btn btn-success">Add</button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        developer: {
          username: '',
          price: ''
        }
      };
    },
    methods: {
      add () {
        this.$dispatch('addDeveloper', Object.assign({}, this.developer))
        this.developer.username = '';
        this.developer.price = '';
      }
    }
  }
</script>
