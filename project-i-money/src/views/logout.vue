<template>
  <h1>logout Page...</h1>
</template>

<script>
import { useRouter } from "vue-router";

import { uselogout } from "../composables/useLogout";

export default {
  setup() {
    const router = useRouter();
    const { error, logout } = uselogout();

    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }

    onLogout();

    return {};
  },
};
</script>
