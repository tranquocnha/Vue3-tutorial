<script>
import InputField from "../components/InputField.vue";
import Button from "../components/Button.vue";
import MixinsCallApi from "../mixins/callApi";
import Validate from "../mixins/validateLogin.js";
import { useRouter } from "vue-router";

export default {
  components: {
    InputField,
    Button,
  },
  setup() {
    const router = useRouter();

    const {
      email,
      emailError,
      password,
      passwordError,
      validatePassword,
      validateEmail,
    } = Validate();

    const { checkLogin } = MixinsCallApi();

    function onSubmit() {
      if (checkLogin(email.value, password.value)) {
        router.push({ name: "Register", params: {} });
      }
    }

    return {
      email,
      emailError,
      password,
      passwordError,
      validatePassword,
      validateEmail,
      onSubmit,
    };
  },
};
</script>

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
      <Button type="submit">Register</Button>
    </form>
  </div>
</template>
