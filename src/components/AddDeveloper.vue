<template>

  <alert
    :show.sync="showError"
    :duration="4000"
    type="danger"
    width="350px"
    placement="top-right"
    dismissable
  >
    <span class="icon-ok-circled alert-icon-float-left"></span>
    <strong>Ops!</strong>
    <p>{{ message }}</p>
  </alert>

  <h2>Add a developer</h2>
  <form class="form-inline" role="form" @submit.prevent="add">
    <div class="form-group">
      <input v-model="developer" type="text" placeholder="GitHub Username" class="form-control">
    </div>
    <button type="submit" class="btn btn-success">Add</button>
  </form>
</template>

<script>
  import { alert } from 'vue-strap';

  export default {
    data () {
      return {
        developer: '',
        showError: false,
        message: ''
      };
    },
    methods: {
      add () {
        this.$http.get(`https://api.github.com/search/users?q=${this.developer}`)
        .then( (result) => {
          const json = result.data;
          const user = (json.items ? json.items.length : undefined) ? json.items[0] : {};
          if (!user.login) throw 'Parece que este desenvolvedor não existe';

          const dev = {
            username: user.login,
            price: parseInt(String(user.score).substring(0, String(user.score).indexOf('.'))),
            imageUrl: user.avatar_url
          };
          console.log(dev);
          this.$dispatch('addDeveloper', Object.assign({}, dev))
          this.developer = '';
        })
        .catch( (err) => this.$emit('errorAlert', err) );
      }
    },
    events: {
      errorAlert (msg) {
        this.showError = true;
        this.message = msg || '';
      }
    },
    components: { alert }
  }
</script>
