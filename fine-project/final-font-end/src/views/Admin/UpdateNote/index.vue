<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import {
  // useRouter,
  useRoute,
} from "vue-router";
import Api from "../../../mixins/apiUser";

const { updateNote, detailNote } = Api();
const signupForm = ref(null);
// const router = useRouter();
const route = useRoute();

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

function fetchDetail() {
  detailNote(route.params.id).then((data) => {
    try {
      form.category = data.category;
      form.context = data.context;
    } catch (error) {
      console.log(error.message);
      ElMessage.error(
        "Id : " + route.params.id + " không hợp lẹ hoặc lỗi hệ thống"
      );
    }
  });
}

fetchDetail();

const handleSubmit = () => {
  updateNote(route.params.id, form.context, form.category).then((response) => {
    if (response == "Update Done") {
      ElMessage(
        {
          message: "Update thành công",
          grouping: true,
          type: "success",
        },
        fetchDetail()
      );
    } else {
      ElMessage.error("Id không hợp lẹ hoặc lỗi hệ thống");
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
      <el-button type="primary" @click="handleSubmit()" class="w-full mt-4"
        >Cập Nhật</el-button
      >
    </el-form>
  </el-container>
</template>
