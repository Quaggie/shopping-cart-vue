<template>
  <table class="table">
    <thead>
      <tr>
        <th>Logo</th>
        <th>Username</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr @click="developerInfo(developer)" class="product" v-for="developer in developers" orderBy="developer.username" track-by="$index">
        <td><img :src="developer.imageUrl" class="img-circle small-pic"></td>
        <td>{{developer.username}}</td>
        <td>{{developer.price | currency}}</td>
        <td><button @click="removeDeveloper(developer)" class="btn btn-danger pull-right">Remove</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { removeDeveloper, editDeveloper, developerInfo } from '../vuex/actions';

  export default {
    vuex: {
      actions : {
        removeDeveloper,
        editDeveloper,
        developerInfo
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
        },
        imageUrl: {
          type: String,
          required: true
        }
      }
    }
  }
</script>

<style media="screen">
  .small-pic {
    height: 33px;
  }
</style>
