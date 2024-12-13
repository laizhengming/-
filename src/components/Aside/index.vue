<template>
  <div class="Aside">
    <el-row class="tac">
      <el-col>
        <h5 class="mb-2">每天都是不一样</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Notebook /></el-icon>
              <span>文章操作</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <template #title>
                  <el-icon><EditPen /></el-icon>
                  <span>新建文章</span>
                </template></el-menu-item
              >
              <el-menu-item index="1-2">
                <template #title>
                  <el-icon><Edit /></el-icon>
                  <span>文章管理</span>
                </template>
              </el-menu-item>
              <el-menu-item index="1-3">
                <template #title>
                  <el-icon><GoodsFilled /></el-icon>
                  <span>分类管理</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="2">
            <template #title>
              <el-icon><Comment /></el-icon>
              <span>评论管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template #title>
              <el-icon><Coin /></el-icon>
              <span>用户管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>个人设置</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {
  Notebook,
  Comment,
  Coin,
  UserFilled,
  EditPen,
  Edit,
  GoodsFilled
} from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.Aside {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
.mb-2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  letter-spacing: 2px;
 margin-top: 30px;
}
.el-menu {
  height: 100%;
  width: 100%;
}
::v-deep .el-menu-item.is-active {
  background: linear-gradient(90deg, #409eff, #66b1ff);
  color: #fff !important;
}
</style>