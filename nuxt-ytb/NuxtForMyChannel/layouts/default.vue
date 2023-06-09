<template>
  <div>
    <default-header />
    <!-- <h1>Default layout</h1> -->
    <nuxt />
    <default-footer />
  </div>
</template>

<script>
import DefaultFooter from '../components/Footer/DefaultFooter.vue'
import DefaultHeader from '../components/Header/DefaultHeader.vue'
export default {
  components: { DefaultHeader, DefaultFooter },
}
</script>
