<template>
  <div class="login">
    <div class="login_header">
      <div class="content">
        <div class="login_header_title">
          <h1 class="text-xl">个人博客管理系统</h1>
        </div>
        <div class="login_content">
          <el-form
            :rules="rules"
            class="demo-ruleForm"
            ref="formRef"
            :model="form"
            status-icon
          >
            <el-form-item prop="username">
              <el-input
                placeholder="请输入用户名"
                :prefix-icon="User"
                v-model="form.username"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="请输入密码"
                :prefix-icon="Lock"
                v-model="form.password"
                type="password"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                @click="submitForm(formRef)"
                type="primary"
                size="default"
                >登录</el-button
              >
            </el-form-item>
            <el-form-item>
              <!--忘记密码-->
              <el-link
                class="forget"
                href="https://element-plus.org/zh-CN/component/link.html"
                target="_blank"
                >忘记密码</el-link
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Lock } from "@element-plus/icons-vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const Message = ElMessage;
//账号密码
const form = ref({
  username: "",
  password: "",
});
//表单
const formRef = ref(null);

//验证规则
const rules = ref({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 8, message: "长度在3 到 8 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" },
  ],
});
//登录
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      //判断账号密码是否正确
      if (form.value.username == "admin" && form.value.password == "123456") {
        Message.success("登录成功");
        localStorage.setItem("token", "123456");
        window.location.href = "/Main";
      } else {
        Message.error("请输入正确的账号密码");
        return false;
      }
    } else {
      Message.error("请输入正确的账号密码");
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/login.jpg");
  background-size: cover; /* 让背景图片自适应div的大小，也可以使用其他值，如contain等 */
  background-position: center; /* 让背景图片居中显示 */
  width: 100%;
  height: 100vh;
}
.login_header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content {
  width: 300px;
  height: 250px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
}

.login_header_title {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_content {
  width: 100%;
  height: 83%;
}
.text-xl {
  font-size: 20px;
  color: #fff;
  font-weight: 700;
}
.demo-ruleForm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.el-input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
}
.forget {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  &:hover {
    color: #409eff;
  }
}
</style>
