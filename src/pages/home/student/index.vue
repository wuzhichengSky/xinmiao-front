<template>
    <div class="student_container">
        <div class="top">
            <el-button key="学生信息管理" type="info" text  @click="changeActive('/home/student/message')">学生信息管理</el-button>
            <el-button key="学生注册审核" type="info" text  @click="changeActive('/home/student/verify')">学生注册审核</el-button>
            <el-button key="学生注册情况" type="info" text  @click="changeActive('/home/student/register')">学生注册情况</el-button>
        </div>
        <div class="content">
            <!-- 子组件展示结构地方 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

let $router = useRouter();

//左侧菜单点击事件的回调
const changeActive = (path: string) => {
  //跳转到对应二级路由
  $router.push({ path });
};

</script>

<style scoped></style>