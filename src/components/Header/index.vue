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
          <div class="sy_in_icon">
            <el-icon><Promotion /></el-icon>
          </div>
          <span>返回首页</span>
        </div>
        <div class="down">
          <!--图标-->
          <div class="down_icon">
            <SwitchButton />
          </div>
          <el-popconfirm
            width="220"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="确定要退出吗"
            @cancel="onCancel"
          >
            <template #reference>
              <span>退出</span>
            </template>
            <template #actions="{  cancel }">
              <el-button size="small" @click="cancel">取消</el-button>
              <el-button
                type="danger"
                size="small"
                @click="handleconfirm"
              >
                确定
              </el-button>
            </template>
          </el-popconfirm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Edit,
  Promotion,
  InfoFilled,
  SwitchButton,
} from "@element-plus/icons-vue";
const clicked = ref(false);
function onCancel() {
  clicked.value = true;
}
//退出
const handleconfirm = () => {
   //清除token
  localStorage.removeItem("token");
  //跳转登录页
  window.location.href = "/";

}
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
  margin-right: 50px;
  .username {
    margin-left: 10px;
    position: relative;
    top: -10px;
  }
}
.sy_in {
  display: flex;
  .sy_in_icon {
    width: 20px;
    height: 20px;
    position: relative;
    top: 2px;
    left: -10px;
  }
}
.down_icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}
.down {
  display: flex;
  margin: 0 50px 0 50px;
}
</style>