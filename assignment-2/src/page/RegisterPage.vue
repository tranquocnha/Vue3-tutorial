<script setup>
import InputField from "../components/InputField.vue";
import Button from "../components/Button.vue";
import MixinsCallApi from "../mixins/callApi";
import Validate from "../mixins/validateLogin.js";
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const fullName = ref("");
const {
  email,
  emailError,
  password,
  passwordError,
  validatePassword,
  validateEmail,
} = Validate();
const { register } = MixinsCallApi();

const hasErrors = computed(() => {
  return emailError.value !== "" && passwordError.value !== "";
});

watch([email, password], () => {
  validateEmail();
  validatePassword();
});

async function onSubmit() {
  validateEmail();
  validatePassword();

  if (!hasErrors.value) {
    if (register(email.value, password.value, fullName.value)) {
      router.push({ name: "Login", params: {} });
    }
  }
}
</script>
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: From -->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <InputField
              id="fullName"
              label="Full Name"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="iMoney..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <InputField
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              label="Email Address"
              placeholder="example@gmail.com"
              autocomplete="username"
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
            :disabled="hasErrors"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
