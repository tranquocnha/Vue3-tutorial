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
          :key="detail._id"
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

    <!-- Modal -->
    <v-modal name="CreateDetailModal">
      <div class="modal_body">
        <h1>Create a new Detail</h1>
        <form action="">
          <div class="form_group">
            <label for="">Name: </label>
            <input
              class="form_control"
              type="text"
              placeholder="Please enter name detail"
            />
          </div>
          <div class="form_group">
            <label for="">Description: </label>
            <textarea
              class="form_control"
              name=""
              cols="30"
              rows="10"
              placeholder="Please enter description"
            ></textarea>
          </div>
          <div class="form_group">
            <label for="">Thumbnail: </label>
            <input class="form_control" type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close
            </button>
            <button class="btn btn_success ml_3" @click.prevent="createDetail">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
import DetailList from '../../components/Details/DetailList.vue'
// import { ref } from 'vue'
export default {
  components: { DetailList },

  asyncData(context, callback) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        details: [
          {
            _id: 1,
            name: 'Learn English',
            description:
              'He had kept Ruth and seven-year-old Loren in good clothes and well fed.',
            thumbnail:
              'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          },
          {
            _id: 2,
            name: 'Learn Chinas',
            description:
              'He had kept Ruth and seven-year-old Loren in good clothes and well fed.',
            thumbnail:
              'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          },
          {
            _id: 3,
            name: 'Learn Japan',
            description:
              'He had kept Ruth and seven-year-old Loren in good clothes and well fed.',
            thumbnail:
              'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          },
        ],
      })
    }, 1500)
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateDetailModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'CreateDetailModal' })
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

.modal_body {
  background-color: #ffffff;
  padding: 7rem;
}
</style>
