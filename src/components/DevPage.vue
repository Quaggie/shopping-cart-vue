<template>
  <h1>Dev</h1>
</template>

<script>
  export default {
    data () {
      dev: {}
    },
    route: {
      data ({ to }) {
        document.title = to.params.dev;
        console.log(to.params.dev);
        return {
          dev: to.params.dev
        }
      }
    }
  }
</script>
