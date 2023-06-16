<template>
  <form action="" @submit.prevent="onSave">
    <div class="form_group">
      <label for="">Name: </label>
      <input
        v-model="editedDetail.name"
        class="form_control"
        type="text"
        placeholder="Please enter name detail"
      />
    </div>
    <div class="form_group">
      <label for="">Description: </label>
      <textarea
        v-model="editedDetail.description"
        class="form_control"
        name=""
        cols="30"
        rows="10"
        placeholder="Please enter description"
      ></textarea>
    </div>
    <div class="form_group">
      <label for="">Thumbnail: </label>
      <input
        v-model="editedDetail.thumbnail"
        class="form_control"
        type="text"
        placeholder="https://example.com/foo.png"
      />
      <div class="preview"></div>
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" type="button" @click.prevent="closeModal">Close</button>
      <button class="btn btn_success ml_3" type="submit">
        {{ editedDetail && editedDetail.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: false,
      default: () => ({
        name: '',
        description: '',
        thumbnail: '',
      }),
    },
  },
  data() {
    return {
      editedDetail: this.detail
        ? { ...this.detail }
        : {
            name: '',
            description: '',
            thumbnail: '',
          },
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'DetailFromModal' })
    },
    onSave() {
      this.$emit('submit', this.editedDetail)
    },
  },
}
</script>
