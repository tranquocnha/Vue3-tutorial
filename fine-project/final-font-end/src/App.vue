<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, watch, ref } from "vue";
import { PUBLIC_LAYOUT, PUBLIC_AUTH } from "./constants/index";

const route = useRoute();
const checkLayout = ref("");
watch(() => {
  if (route.meta?.layout === PUBLIC_AUTH) {
    checkLayout.value = PUBLIC_AUTH;
  } else {
    checkLayout.value = PUBLIC_LAYOUT;
  }
});

const layout = computed(() => checkLayout.value + "-layout");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
