<template>
  <div class="modal fade" @click.self="onCloseModal">
    <div class="modal-dialog">
      <div class="modal-content" :class="{ 'bg-purple': theme === 'contact' }">
        <div class="modal-header">
          <slot name="header" />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      tyle: String,
      default: "",
    },
    theme: {
      type: String,
      default: "example",
      validator(value) {
        return ["example", "sales", "contact"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    onCloseModal() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped lang="css">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
@media (min-width: 576px) .modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 5.75rem;
  pointer-events: none;
}
.fade {
  transition: opacity 0.15s linear;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-content.bg-purple {
  background-color: purple;
}
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
</style>
