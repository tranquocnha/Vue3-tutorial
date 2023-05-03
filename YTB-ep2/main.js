const app = Vue.createApp({
  template: `
    <h1> Contact with {{teamName}} and {{ !isHello ? firstName + ' ' + lastName : '' }} </h1>
    <button v-on:click = "onChangeName">Change Name</button>
    <button @click = "onChangeName"> @ = v-on Change Name</button>
    <div class="modal" v-if="isShowModal">
      <h1>Modal content  </h1>
    </div>
  `,
  data() {
    return {
      teamName: "Nhatq Team",
      firstName: "Nha",
      lastName: "Quoc",
      isHello: false,
      isShowModal: false,
    };
  },
  methods: {
    onChangeName() {
      console.log(this);
      this.firstName = "Sky";
      this.lastName = "ba";
      this.isShowModal = !this.isShowModal;
    },
  },
});

app.mount("#contact");
