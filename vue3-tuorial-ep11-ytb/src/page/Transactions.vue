<template>
  <h1>Transaction pages is here...</h1>
  <div v-if="transactions.length > 0">
    <div class="item" v-for="transaction in transactions">
      <router-link
        :to="{ name: 'transaction-detail', params: { id: transaction.id } }"
        >{{ transaction.name }}
      </router-link>
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div class="" v-else-if="error">{{ error }}</div>
  <div v-else>Loading Transaction ...</div>
</template>

<script>
import { ref, computed } from "vue";
// import useTransaction from "../uses/fetchTransaction";
import { useStore } from "vuex";

export default {
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // created() {
  //   // fetch("http://localhost:3000/transactions")
  //   //   .then((response) => response.json())
  //   //   .then((data) => (this.transactions = [...data]));
  // },
  // mounted() {
  //   console.log(document.querySelector("h1"));
  // },
  setup() {
    // const { transactions, error, fetchAllAPI } = useTransaction();
    // fetchAllAPI();

    const store = useStore();

    store.dispatch("fetchAllTransaction");

    const transactions = computed(() => store.state.transactionAll);
    const error = computed(() => store.state.error);
    return {
      transactions,
      error,
    };
  },
};
</script>
