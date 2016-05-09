<template>
  <table class="table">
    <thead>
      <tr>
        <th>Username</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="product" v-for="developer in developers" track-by="$index">
        <td>{{developer.username}}</td>
        <td>{{developer.price | currency}}</td>
        <td><button @click="removeDeveloper(developer)" class="btn btn-danger pull-right">Remove</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    methods: {
      removeDeveloper (dev) {
        this.$dispatch('removeDeveloper', dev);
      }
    },
    props: {
      developers: {
        username: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    }
  }
</script>
