<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT, PUBLIC_AUTH } from "./constants/index";

export default {
  setup() {
    const route = useRoute();
    let checkLayout = null;
    console.log(route.meta.layout);
    if (route.meta.layout === PUBLIC_AUTH) {
      checkLayout = PUBLIC_AUTH;
    } else {
      checkLayout = PUBLIC_LAYOUT;
    }
    console.log(checkLayout + "-layout");
    return {
      layout: computed(() => checkLayout + "-layout"),
    };
  },
};
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
