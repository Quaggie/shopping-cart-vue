<template>
  <h2>Add a developer</h2>
  <form class="form-inline" role="form" @submit.prevent="add">
    <div class="form-group">
      <input v-model="developer" type="text" placeholder="GitHub Username" class="form-control">
    </div>
    <button type="submit" class="btn btn-success">Add</button>
  </form>
</template>

<script>
  import Vue from 'vue';

  export default {
    ready () {
    },
    data () {
      return {
        developer: ''
      };
    },
    methods: {
      add () {
        Vue.http.get(`https://api.github.com/search/users?q=${this.developer}`)
        .then( (result) => {
          const json = result.data;
          const user = (json.items ? json.items.length : undefined) ? json.items[0] : {};
          if (!user.login) throw new Error('Usuário não achado!');

          const dev = {
            username: user.login,
            price: parseInt(String(user.score).substring(0, String(user.score).indexOf('.'))),
            imageUrl: user.avatar_url
          };
          console.log(dev);
          this.$dispatch('addDeveloper', Object.assign({}, dev))
          this.developer = '';
        })
        .catch( (err) => console.log(err));
      }
    }
  }
</script>
