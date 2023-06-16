<template>
  <div>
    <default-header />
    <!-- <h1>Default layout</h1> -->
    <nuxt />
    <!-- Modal -->
    <v-modal v-slot="payload" name="DetailFromModal">
      <div class="modal_body">
        <h1>
          {{
            payload && payload.payload ? 'Edit a Detail' : 'Create a new Detail'
          }}
        </h1>
        <detail-form :detail="payload.payload" @submit="onSubmit"></detail-form>
      </div>
    </v-modal>

    <default-footer />
  </div>
</template>

<script>
import DefaultFooter from '../components/Footer/DefaultFooter.vue'
import DefaultHeader from '../components/Header/DefaultHeader.vue'
import DetailForm from '@/components/Details/DetailForm.vue'

export default {
  components: { DefaultHeader, DefaultFooter, DetailForm },
  methods: {
    onSubmit(detailsData) {
      if (detailsData && !detailsData.id) {
        this.$store
          .dispatch('addDetail', detailsData)
          .then(() => this.$modal.close({ name: 'DetailFromModal' }))
      } else {
        this.$store.dispatch('editDetail', detailsData).then(() => {
          this.$modal.close({ name: 'DetailFromModal' })
          this.$router.push('/detail')
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal_body {
  background-color: #fff;
  padding: 7rem;
}
</style>
