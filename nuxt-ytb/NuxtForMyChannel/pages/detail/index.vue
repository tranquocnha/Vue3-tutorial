<template>
  <div>
    <h1>Your Detail, please enter number of deck to show:</h1>
    <input v-model="detailId" type="text" placeholder="Please enter detailId" />
    <nuxt-link :to="{ name: 'detail-id', params: { id: detailId } }">Go to Detail</nuxt-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const detailId = ref(null)
</script>
