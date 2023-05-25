<script setup>
import { ref } from "vue";
import API from "../../../mixins/apiUser";
const list = ref(null);
const listLoading = ref(null);
const { getList } = API();
// function statusFilter(status) {
//   const statusMap = {
//     published: "success",
//     draft: "info",
//     deleted: "danger",
//   };
//   return statusMap[status];
// }
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
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="200">
        <template v-slot:default="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Category" sortable width="200" align="center">
        <template v-slot:default="scope">
          <span>{{ scope.row.category }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Context" width="400" align="left">
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
      <el-table-column fixed="right" label="Action">
        <template #default>
          <el-button link type="primary" size="small">Delete</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
