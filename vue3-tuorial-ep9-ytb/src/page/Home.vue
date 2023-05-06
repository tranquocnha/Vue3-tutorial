<template>
  <h1>Home Page is here</h1>
  <!-- <p>{{ secondName }}</p> -->
  <p>{{ firstName }}</p>
  <!-- <p>{{ car }}</p>  -->
  <!-- <button @click="onChangeSomeThing">Click Some Thing</button>
   -->
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in cutomersFilled" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>

<script>
import { watch, computed, ref, reactive, watchEffect } from "vue";

export default {
  setup() {
    const firstName = ref("nhatq");
    const searchText = ref("");
    const customers = reactive(["SomeThing", "Sky albert", "VueJS", "Angular"]);

    const cutomersFilled = computed(() => {
      return customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) =>
          customer.includes(searchText.value.toLowerCase())
        );
    });

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });
    // const secondName = ref({
    //   name: "hu",
    //   someThing: "ha",
    // });

    // let car = reactive({
    //   price: 100000,
    //   name: "Vin",
    // });

    // function onChangeSomeThing() {
    //   console.log("running here...");
    //   console.log(firstName);
    //   console.log(car);
    //   car.price = 200000;
    //   firstName.value = "Tran Quoc";

    //   secondName.value = {
    //     name: "Hi",
    //     someThing: "Hu",
    //   };

    //   car.set = {
    //     price: 200000,
    //     name: "HonDa",
    //   };
    // }

    return {
      firstName,
      // secondName, onChangeSomeThing,
      // car
      searchText,
      cutomersFilled,
    };
  },
};
</script>
