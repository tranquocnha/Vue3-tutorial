<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Detail: {{ $route.params.id }} Learn English By Sky Albert</h3>
        <div class="tools">
          <button class="btn btn_success">Start Now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Add a card
          </button>
        </div>
        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :picture="card.picture"
            :keyword="card.keyword"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <v-modal name="CreateCardModal">
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
  </section>
</template>

<script>
import CardList from '../../../components/Cards/CardList.vue'

export default {
  components: { CardList },
  validate({ params }) {
    return /^[0-9]$/.test(params.id)
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          keyword: 'Road',
        },
        {
          _id: 2,
          picture:
            'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          keyword: 'Road',
        },
        {
          _id: 3,
          picture:
            'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          keyword: 'Road',
        },
        {
          _id: 4,
          picture:
            'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          keyword: 'Road',
        },
        {
          _id: 5,
          picture:
            'https://www.eslbuzz.com/wp-content/uploads/2017/11/Kinds-of-Shops.jpg.webp',
          keyword: 'Road',
        },
      ],
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 3rem;

}
.modal_body {
  background-color: #ffffff;
  padding: 7rem;
}
</style>
