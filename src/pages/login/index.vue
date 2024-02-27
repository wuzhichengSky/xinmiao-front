<template>
  <div class="login_container">

    <el-row>
      <el-col :span="12" :xs="0" />
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form" :model="loginForm" :rules="rules">
          <h1>Hello</h1>
          <h2>欢迎来到新苗同学后台管理系统</h2>
          <el-form-item prop="account">
            <el-input v-model="loginForm.account" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock" show-password />
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
   
<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();


//获取路由器对象
let $router = useRouter();

//定义变量控制按钮加载效果
const loading = ref(false)
//收集账号与密码的数据
const loginForm = reactive({ account: 'admin', password: 'xinmiao666' })

//自定义校验规则函数
const validatorUserName = (value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

//定义表单校验需要配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'change', validator: validatorUserName }
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'change', validator: validatorPassword }
  ]
}

//登录请求
const login = async () => {
  //发起登录请求
  //登录请求成功:顶部组件需要展示用户名字、对话框关闭
  //登录请求失败:弹出对应登录失败的错误信息
  try {
    //用户登录成功
    await userStore.adminLogin(loginForm);
    $router.push({ path: "/home/index" });

    ElMessage({
      message: '登录成功',
      type: 'success',
    })
  } catch (error) {
    ElMessage({
      message: '账号或密码错误',
      type: 'warning',
    })
  }
}
</script>
   
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>