<template>
  <table class="table">
    <tbody>
      <tr class="total">
        <td>Total</td>
        <td>{{total}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    total () {
      if (this.$parent.developers.length) {
        const total = this.$parent.developers.map( (dev) => dev.price).reduce( (prev, curr) => prev + curr, 0);
        console.log(total);
        return total;
      } else {
        return 0;
      }
    }
  }
}
</script>
