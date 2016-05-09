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
        <td>{{developer.price}}</td>
        <td><button @click="removeDeveloper(developer)" class="btn btn-danger pull-right">Remove</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    methods: {
      removeDeveloper (dev) {
        this.$parent.developers.$remove(dev);
        console.log(this.$parent.developers);
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
