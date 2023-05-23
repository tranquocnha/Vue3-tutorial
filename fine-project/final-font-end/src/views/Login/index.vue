<template>
  <div class="flex flex-col pt-24">
    <div class="w-20 h-20 text-center mx-auto">
      <img
        :src="require('../../assets/iMoney_Logo.png')"
        alt="iMoney Brand Login"
        class="w-full h-auto object-cover"
      />
    </div>
    <div class="text-center mt-12">
      <h1 class="font-bold text-xl text-dark">
        Best way to saving Your Money!
      </h1>
    </div>
  </div>
  <login-component />
  <!-- Start: Direction -->
  <div class="w-full text-center mt-6">
    <span class="font-semibold">I'm a new user.</span>
    <span class="ml-1">
      <router-link
        :to="{ name: 'Register', params: {} }"
        class="text-primary font-bold"
        >Sign Up</router-link
      >
    </span>
  </div>
</template>

<script>
import LoginComponent from "./components/Login.vue";

export default {
  components: { LoginComponent },
};
</script>

<style scoped></style>
