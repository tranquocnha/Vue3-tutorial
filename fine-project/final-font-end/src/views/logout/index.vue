<template>
  <h1>
    Logout Đây là nơi ghi cho dev script biết là log out không có hiển thị
  </h1>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function onLogout() {
  localStorage.removeItem("login");
  router.push({ name: "Login", params: {} });
}
onLogout();
</script>
