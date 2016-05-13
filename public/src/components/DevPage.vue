<template>
  <h1>{{ developer.username }}</h1>
  <h2>{{ developer.price | currency }}</h2>
  <img :src="developer.imageUrl">
</template>

<script>
  export default {
    vuex: {
      getters: {
        developers: ({cart}) => cart.developers
      }
    },
    computed: {
      developer () {
        return this.developers.find( ({username}) => username === this.$route.params.dev);
      }
    }
  }
</script>
