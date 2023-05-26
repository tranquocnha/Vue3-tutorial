<script setup>
import NavigationBrand from "../components/ContainerSidebar.vue";
</script>
<template>
  <el-container class="layout-container-demo">
    <navigation-brand />
    <slot />
  </el-container>
</template>
