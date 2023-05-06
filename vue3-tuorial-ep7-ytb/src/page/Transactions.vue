<template>
  <h1>Transaction pages is here...</h1>
  <div class="item" v-for="transaction in transactions">
    <router-link
      :to="{ name: 'transaction-detail', params: { id: transaction.id } }"
      >{{ transaction.name }}
    </router-link>
    <div class="price">Price: {{ transaction.price }}</div>
  </div>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Xe Hoda",
          price: 20000000,
        },
        {
          id: 2,
          name: "Xe Yamaha",
          price: 30000000,
        },
        {
          id: 3,
          name: "Xe Vin",
          price: 40000000,
        },
      ],
    };
  },
};
</script>
