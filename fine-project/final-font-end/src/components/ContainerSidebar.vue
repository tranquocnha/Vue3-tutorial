<template>
  <el-aside width="15%">
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><message /></el-icon>Menu Admin
          </template>
          <el-menu-item-group>
            <template #title>Thêm mới</template>
            <el-menu-item index="1-1">
              <router-link :to="{ name: 'Create', params: {} }"
                >Thêm Note</router-link
              >
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Danh Sách">
            <el-menu-item index="1-2">
              <router-link :to="{ name: 'List', params: {} }"
                >Danh Sách Note</router-link
              >
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
