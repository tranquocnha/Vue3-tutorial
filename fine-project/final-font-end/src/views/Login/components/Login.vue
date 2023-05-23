<template>
  <div class="mt-8">
    <div class="container mx-auto px-96">
      <el-form
        class="flex flex-col space-y-6 p-2"
        ref="loginForm"
        :rules="rules"
        :model="form"
        label-width="80px"
      >
        <el-form-item class="font-semibold" label="Username" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item class="font-semibold" label="Password" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Login</el-button>
        </el-form-item>
        <span v-if="messageLogin">{{ messageLogin }}</span>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const loginForm = ref(null);
const messageLogin = ref("");
const router = useRouter();
const rules = {
  username: [
    {
      required: true,
      message: "Please input your username",
      trigger: "blur",
    },
    {
      min: 8,
      message: "Please input your username (at least 8 characters)",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
      trigger: "blur",
    },
    {
      min: 6,
      message: "Please input your password (at least 6 characters)",
      trigger: "blur",
    },
  ],
};

const form = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  messageLogin.value = "";
  loginForm.value.validate((valid, fields) => {
    if (valid) {
      // check login voi api

      // chuyen trang den url:/
      router.push({ name: "Home", params: {} });
      // Gửi form
    } else {
      console.log(fields.password, fields.username);
      messageLogin.value = "Password or username invalid";
    }
  });
};
</script>
