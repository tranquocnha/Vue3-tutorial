<template>
  <h1>Home Page is here</h1>
  <p>{{ secondName }}</p>
  <p>{{ firstName }}</p>
  <p>{{ car }}</p>
  <button @click="onChangeSomeThing">Click Some Thing</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const firstName = ref("nhatq");

    const secondName = ref({
      name: "hu",
      someThing: "ha",
    });

    let car = reactive({
      price: 100000,
      name: "Vin",
    });

    function onChangeSomeThing() {
      console.log("running here...");
      console.log(firstName);
      console.log(car);
      car.price = 200000;
      firstName.value = "Tran Quoc";

      secondName.value = {
        name: "Hi",
        someThing: "Hu",
      };

      car = {
        price: 200000,
        name: "HonDa",
      };
    }

    return { firstName, secondName, onChangeSomeThing, car };
  },
};
</script>
