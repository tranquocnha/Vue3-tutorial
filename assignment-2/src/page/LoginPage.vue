<script>
import InputField from "../components/InputField.vue";
import Button from "../components/Button.vue";
import MixinsCallApi from "../mixins/callApi";
import Validate from "../mixins/validateLogin.js";
import { useRouter } from "vue-router";
import { ref, watch, computed } from "vue";

export default {
  components: {
    InputField,
    Button,
  },
  setup() {
    const router = useRouter();
    const errorCheckLogin = ref("");
    const {
      email,
      emailError,
      password,
      passwordError,
      validatePassword,
      validateEmail,
    } = Validate();

    const { checkLogin } = MixinsCallApi();

    const hasErrors = computed(() => {
      return emailError.value !== "" || passwordError.value !== "";
    });

    watch([email, password], () => {
      validateEmail();
      validatePassword();
    });

    function onSubmit() {
      errorCheckLogin.value = "";
      const checkSubmit = checkLogin(email.value, password.value);
      checkSubmit.then((result) => {
        result[0]
          ? router.push({ name: "Home", params: {} })
          : (errorCheckLogin.value = "Tài khoản hoặc mật khẩu đã sai");
      });
    }

    return {
      email,
      emailError,
      password,
      passwordError,
      validatePassword,
      validateEmail,
      onSubmit,
      hasErrors,
      errorCheckLogin,
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
      <span v-if="errorCheckLogin">{{ errorCheckLogin }}</span>
      <Button type="submit" :disabled="hasErrors">Register</Button>
    </form>
  </div>
</template>
