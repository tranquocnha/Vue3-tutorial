<template>
  <div>
    <h1 class="fade">Hello From CLi</h1>
    <!-- <header-app ref="header" /> -->
    <teleport to="body">
      <base-modal
        v-if="isShowModal"
        title="this is new title form app component"
        content="This is content modal"
        theme="example"
        @cancel="onToggleModal"
      >
        <template v-slot:header>
          <h2>this is header</h2>
        </template>
        <template v-slot:footer>
          <button @click="onToggleModal">Cancel</button>
        </template>
        <label for=""> Name</label>
        <input type="password" />
      </base-modal>
    </teleport>
    <button @click="onToggleModal">Toggle modal</button>
  </div>
  <!-- <button @click="onChange">Change me</button> -->
</template>

<script>
// import HeaderComponent from "./components/Header.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    // HeaderApp: HeaderComponent,
    BaseModal: Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onChange() {
      console.log("Change Me");
      console.log(this.$refs.hello);
      console.log(this.$refs.header);
      this.$refs.hello.onConsoleTesting();
    },
    onToggleModal() {
      console.log("Check");
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style></style>
