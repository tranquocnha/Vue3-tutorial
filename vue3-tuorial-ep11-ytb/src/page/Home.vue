<template>
  <h1>Home Page is here</h1>
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      transactions: []
    };
  },
  created() {
    console.log(this.$store.state.count);
    this.count = this.$store.state.count;
  },
};
</script>
