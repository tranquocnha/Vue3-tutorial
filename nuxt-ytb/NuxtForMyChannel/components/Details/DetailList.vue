<template>
  <li>
    <nuxt-link class="detail" :to="`/detail/${id}`">
      <div class="card detail-card">
        <!-- <div class="thumbnail-detail"></div> -->
        <img class="w" :src="thumbnail" :alt="`thumbnail of ${name}`" />
        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.detail {
  display: block;
}
li {
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
}
.detail-card {
  display: flex;
  flex-direction: row;
  height: 250;
  img {
    width: 250px;
    height: auto;
  }
}
</style>
