<template>
  <div modal="true">
    <div>
      <div v-if="visible" :data-modal="name">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="1"
          class="modal_mask"
        >
          <div class="modal">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import VModal from './handle'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const payload = ref(null)
    const visible = ref(false)

    // me those

    // eslint-disable-next-line no-unused-vars
    const open = (params) => {
      visible.value = true
      // to do something
    }
    const close = (params) => {
      visible.value = false
      // to do something
    }

    // mount
    onBeforeMount(() => {
      VModal.EventBus.$on('open', (params) => {
        if (props.name === params.name) {
          open(params)
        }
      })

      VModal.EventBus.$on('close', (params) => {
        if (props.name === params.name) {
          close(params)
        }
      })
    })

    return { payload, visible }
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
  &__body {
    background: #fff;
  }
}
</style>
