import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 1000,
      transaction: null,
      transactions: [1, 2, 3, 4],
      transactionAll: [],
      error: null,
    };
  },
  getters: {
    transactionFiltered(state) {
      return state.transactions.filter((transaction) => transaction % 2 === 0);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayLoad) {
      state.transaction = transactionPayLoad;
    },
    setAllTransactions(state, transactionPayLoad) {
      state.transactionAll = transactionPayLoad;
    },
    setError(state, errorPayLoad) {
      state.error = errorPayLoad;
    },
  },
  actions: {
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();

      commit("setTransaction", data);
    },

    async fetchAllTransaction({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/transactions");

        if (!response.ok) throw new Error("Something went wrong.");

        const data = await response.json();

        commit("setAllTransactions", data);
      } catch (err) {
        commit("setError", err.message);
        console.log(err);
      }
    },
  },
});

export default store;
