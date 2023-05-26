<script setup>
import { ref } from "vue";
import API from "../../../mixins/apiUser";
import { ElMessage } from "element-plus";

const visible = ref(false);
const list = ref(null);
const listLoading = ref(null);
const { getList, deleteNote } = API();
// function statusFilter(status) {
//   const statusMap = {
//     published: "success",
//     draft: "info",
//     deleted: "danger",
//   };
//   return statusMap[status];
// }

function onDelete(id) {
  console.log(id);
  deleteNote(id).then((response) => {
    response
      ? ElMessage(
          {
            message: "Xóa thành công",
            grouping: true,
            type: "success",
          },
          fetchData()
        )
      : ElMessage.error("Id không hợp lẹ hoặc lỗi hệ thống");
  });
  visible.value = false;
}

function fetchData() {
  listLoading.value = true;
  getList().then((response) => {
    list.value = response;
    listLoading.value = false;
  });
}
fetchData();
</script>
<template>
  <el-container>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="100">
        <template v-slot:default="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Category" width="200" align="center">
        <template v-slot:default="scope">
          <span>{{ scope.row.category }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Context" align="left">
        <template v-slot:default="scope">
          {{ scope.row.context }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="Create Date"
        width="140"
      >
        <template v-slot:default="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Action" width="150">
        <template v-slot:default="scope">
          <el-popover placement="top" :width="90">
            <p>Bạn có muốn xóa không? {{ scope.row.id }}</p>
            <div style="text-align: right; margin: 0">
              <el-button
                link
                type="primary"
                size="small"
                @click="onDelete(scope.row.id)"
                >confirm</el-button
              >
            </div>
            <template #reference>
              <el-button
                link
                type="primary"
                size="small"
                @click="visible = true"
                >Delete</el-button
              >
            </template>
          </el-popover>

          <el-button link type="primary" size="small">
            <router-link :to="{ name: 'Update', params: { id: scope.row.id } }"
              >Edit</router-link
            >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>
