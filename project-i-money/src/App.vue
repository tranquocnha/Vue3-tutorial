<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
// import { db } from "./config/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";
// import { ref } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "./constants/index";

export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
