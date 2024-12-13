<template>
  <div class="header">
    <div class="container">
      <div class="content">
        <div class="avatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <!--用户名-->
          <span class="username">admin</span>
        </div>
        <div class="sy_in">
          <el-icon><Promotion /></el-icon>
          <span>返回首页</span>
        </div>
        <div class="down">
          <!--图标-->
          <Edit />
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              退出<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
                <el-dropdown-item divided>Action 6</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Edit, Promotion } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 10px;
}
.container {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
}
.content {
  display: flex;
  align-items: center;
}
.avatar {
  margin-right: 20px;
  .username {
    margin-left: 10px;
    position: relative;
    top: -10px;
  }
}
.sy_in {
  margin: 5px 10px -0 0;
}
.down {
  margin: 10px 10px 0 10px;
}
</style>