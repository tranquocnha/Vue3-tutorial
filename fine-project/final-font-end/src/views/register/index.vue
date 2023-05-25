<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import Api from "../../mixins/apiUser";

const signupForm = ref(null);
const messageSignup = ref("");
const router = useRouter();
const { register } = Api();
const form = reactive({
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
});

const rules = {
  name: [
    { required: true, message: "Vui lòng nhập tên đăng nhập", trigger: "blur" },
    {
      min: 12,
      message: "Tên đăng nhập phải ít nhất 12 kí tự",
      trigger: "blur",
    },
  ],
  username: [
    { required: true, message: "Vui lòng nhập tên đăng nhập", trigger: "blur" },
    { min: 8, message: "Tên đăng nhập phải ít nhất 8 kí tự", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" },
    { min: 6, message: "Mật khẩu phải ít nhất 6 kí tự", trigger: "blur" },
  ],
  confirmPassword: [
    { required: true, message: "Vui lòng xác nhận mật khẩu", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error("Mật khẩu không trùng khớp"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
};

const handleSubmit = () => {
  messageSignup.value = "";
  signupForm.value.validate((valid) => {
    if (valid) {
      console.log(form.username);
      // Gửi request đăng ký tài khoản tới server ở đây
      const checkSubmit = register(form.username, form.password, form.name);
      // Chuyển đến trang chủ
      checkSubmit.then((result) => {
        result != null
          ? router.push({ name: "Login", params: {} })
          : ElMessage.error("Dữ liệu nhập vào không hợp lệ");
      });
    } else {
      ElMessage.error("Dữ liệu nhập vào không hợp lệ");
    }
  });
};
</script>
<template>
  <div class="container mx-auto my-8">
    <h1 class="text-center mb-4 text-3xl font-bold">Đăng ký</h1>
    <el-form
      :model="form"
      :rules="rules"
      ref="signupForm"
      label-width="100px"
      class="mx-auto max-w-lg"
    >
      <el-form-item label="Full name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="User name" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="Confirm Password" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleSubmit" class="w-full mt-4"
        >Đăng ký</el-button
      >
      <span v-if="messageSignup" class="text-danger">{{ messageSignup }}</span>
    </el-form>
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
</template>

<style>
/* Định dạng UI */
.el-form-item__label {
  font-weight: bold;
  height: 32px;
  line-height: 18px;
}
</style>
