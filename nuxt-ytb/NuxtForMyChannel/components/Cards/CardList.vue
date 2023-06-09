<template>
  <div class="c_3">
    <div class="card">
      <div class="front-card">
        <img :src="picture" alt="Thumbnail card" />
      </div>
      <div class="back-card">{{ keyword }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    picture: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 1rem;
  img {
    width: 60%;
  }
}
</style>
