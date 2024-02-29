<template>
    <div class="addStudent_container">
        <div class="top">
            <div class="left">导入学生</div>
            <div class="right" @click="changeActive('/home/student/message')">
                <el-icon><ArrowLeftBold /></el-icon>
                <span>返回上一级</span>
            </div>
        </div>
        <div class="bottom">
            我是底部
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    ArrowLeftBold
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
let $router = useRouter();

const changeActive = (path: string) => {
  //跳转到对应二级路由
  $router.push({ path });
};

</script>

<style scoped>

.top {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
    color:  black;
    font-size: 15px;

    .left {
        margin-right: 600px;
    }
    .right {
        display: flex;
    align-items: center;
    cursor: pointer;
    }
}

</style>