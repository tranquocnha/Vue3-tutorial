<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="onSubmit"
    >
      <div class="mb-4">
        <InputField label="Email" v-model.trim="email" @blur="validateEmail" />
        <span v-if="emailError">{{ emailError }}</span>
      </div>
      <div class="mb-6">
        <InputField
          type="password"
          label="Password"
          v-model.trim="password"
          @blur="validatePassword"
        />
        <span v-if="passwordError">{{ passwordError }}</span>
      </div>
      <Button type="submit" primary :disabled="hasErrors">Register</Button>
    </form>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import InputField from "../components/InputField.vue";

export default {
  components: {
    Button,
    InputField,
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    hasErrors() {
      return this.emailError !== "" || this.passwordError !== "";
    },
  },
  watch: {
    email() {
      this.validateEmail();
    },
    password() {
      this.validatePassword();
    },
  },
  methods: {
    onSubmit() {
      alert(`Registering ${this.email} with password ${this.password}`);
    },
    validateEmail() {
      if (!this.email) {
        this.emailError = "Email is required";
      } else if (!this.isEmailValid(this.email)) {
        this.emailError = "Please enter a valid email address";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = "Password is required";
      } else if (this.password.length < 8) {
        this.passwordError = "Password must be at least 8 characters long";
      } else {
        this.passwordError = "";
      }
    },
    isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>
