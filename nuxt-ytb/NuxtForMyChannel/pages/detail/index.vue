<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your Detail:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Detail
        </button>
      </div>
      <ul class="detail-list">
        <detail-list
          v-for="detail in details"
          :id="detail.id"
          :key="detail.id"
          :name="detail.name"
          :description="detail.description"
          :thumbnail="detail.thumbnail"
        />
      </ul>
      <!-- <input
        v-model="detailId"
        class="form-control"
        type="text"
        placeholder="Please enter detailId"
      />
      <nuxt-link
        class="btn btn_success"
        :to="{ name: 'detail-id', params: { id: detailId } }"
        >Go to Detail</nuxt-link
      > -->
    </div>
  </div>
</template>

<script>
import DetailList from '@/components/Details/DetailList.vue'
// import { ref } from 'vue'
export default {

  components: { DetailList },
  middleware: ['check-auth' , 'auth'],
  head: {
    title: 'List Details Learning Languages By Flash Card online',
  },

  // asyncData(context) {
  //   return (
  //     new Promise((resolve, reject) => {
  //       // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //       setTimeout(() => {
  //         resolve({
  //           details: [
  //             {
  //               _id: 1,
  //               name: 'Learn English',
  //               description:
  //                 'He had kept Ruth and seven-year-old Loren in good clothes and well fed.',
  //               thumbnail:
  //                 'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
  //             },
  //             {
  //               _id: 2,
  //               name: 'Learn Chinas',
  //               description:
  //                 'He had kept Ruth and seven-year-old Loren in good clothes and well fed.',
  //               thumbnail:
  //                 'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
  //             },
  //             {
  //               _id: 3,
  //               name: 'Learn Japan',
  //               description:
  //                 'He had kept Ruth and seven-year-old Loren in good clothes and well fed.',
  //               thumbnail:
  //                 'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
  //             },
  //           ],
  //         })
  //       }, 1500)
  //     })
  //       .then((data) => {
  //         return data
  //       })
  //       // eslint-disable-next-line no-console
  //       .catch((e) => context.error(e))
  //   )
  // },
  // fetch(context) {},
  // created() {
  //   this.$store.dispatch('setDetails', this.details)
  // },
  computed: {
    details() {
      return this.$store.getters.details
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'DetailFromModal' })
    },
  },
}
// const detailId = ref(null)
</script>

<style lang="scss" scoped>
.ct {
  margin-left: 0px;
}
.detail-list {
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
}
</style>
