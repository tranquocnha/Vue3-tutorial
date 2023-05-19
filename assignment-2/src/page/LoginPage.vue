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
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: From -->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="email">
            <InputField
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              autocomplete="username"
              label="Email"
              v-model.trim="email"
              @blur="validateEmail"
            />
          </label>
          <span v-if="emailError">{{ emailError }}</span>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <InputField
              id="password"
              type="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              label="Password"
              v-model.trim="password"
              @blur="validatePassword"
            />
          </label>
          <span v-if="passwordError">{{ passwordError }}</span>
        </div>
        <div class="row">
          <Button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign In
          </Button>
          >
        </div>
      </form>

      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
