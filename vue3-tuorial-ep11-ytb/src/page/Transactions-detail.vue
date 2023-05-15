<template>
  <h1>Transaction details pages is here ...</h1>
  <div v-if="transaction">
    <h1>Id : {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading transaction {{ $route.params.id }} ...</div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  // computed: {
  //   transaction() {
  //     return this.$store.state.transaction;
  //   },
  //   transactionFiltered() {
  //     return this.$store.getters.transactionFiltered;
  //   },
  // },
  // created() {
  //   this.$store.dispatch("fetchTransaction", { id: this.$route.params.id });
  // },
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchTransaction", { id: route.params.id });

    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
