<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import Api from "../../../mixins/apiUser";

const { createNote } = Api();
const signupForm = ref(null);
const router = useRouter();
const form = reactive({
  category: "",
  context: "",
});
const rules = {
  category: [
    { required: true, message: "vui lòng nhập thể loại", trigger: "blur" },
  ],
  context: [
    { required: true, message: "Vui lòng nhập nội dung", trigger: "blur" },
  ],
};

const handleSubmit = () => {
  signupForm.value.validate((valid) => {
    if (valid) {
      // console.log(form.username);
      // // Gửi request đăng ký tài khoản tới server ở đây
      const checkSubmit = createNote(form.context, form.category);
      // Chuyển đến trang chủ
      checkSubmit.then((result) => {
        result != null
          ? router.push({ name: "List", params: {} })
          : ElMessage.error("Dữ liệu nhập vào không hợp lệ");
      });
    } else {
      ElMessage.error("Dữ liệu nhập vào không hợp lệ");
    }
  });
};
</script>

<template>
  <el-container class="flex flex-col">
    <div class="text-center mt-12">
      <h1 class="font-bold text-xl text-dark">Nhập thông tin cần thêm mới</h1>
    </div>
    <el-form
      :model="form"
      :rules="rules"
      ref="signupForm"
      label-width="100px"
      class="mx-auto max-w-lg mt-12"
    >
      <el-form-item label="Thể loại" prop="category">
        <el-input v-model="form.category"></el-input>
      </el-form-item>
      <el-form-item label="Nội dung" prop="context">
        <el-input v-model="form.context"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleSubmit" class="w-full mt-4"
        >Thêm Mới</el-button
      >
    </el-form>
  </el-container>
</template>
