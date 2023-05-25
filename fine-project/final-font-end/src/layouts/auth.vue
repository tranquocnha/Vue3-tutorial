<template>
  <navigation-brand />
  <slot />
</template>

<script>
import NavigationBrand from "../components/NavigationBrand.vue";
export default {
  components: {
    NavigationBrand,
  },
  setup() {
    console.log("vao dau roi");
  },
};
</script>
