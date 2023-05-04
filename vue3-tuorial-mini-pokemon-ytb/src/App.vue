<template>
  <main-screen />
  <coppy-right-screen />
  <interact-screen />
</template>

<script>
import Main from "./components/MainScreen.vue";
import CoppyRightScreen from "./components/CoppyRightScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen: Main,
    CoppyRightScreen,
    InteractScreen,
  },
};
</script>
