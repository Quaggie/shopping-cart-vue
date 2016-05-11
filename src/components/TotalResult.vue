<template>
  <table class="table">
    <tbody>
      <tr class="total">
        <td>Total</td>
        <td>{{total | currency}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['developers'],
  computed: {
    total () {
      if (this.developers.length) {
        const total = this.developers.map( (dev) => Number(dev.price)).reduce( (prev, curr) => prev + curr, 0);
        console.log(total);
        return total;
      } else {
        return 0;
      }
    }
  }
}
</script>
