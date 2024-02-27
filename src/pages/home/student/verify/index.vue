<template>
    <div class="register_container">

        <div class="card">
            <div class="time">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>Card name</span>
                            <el-button class="button" text>Operation button</el-button>
                        </div>
                    </template>
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    <template #footer>Footer content</template>
                </el-card>
            </div>
            <div class="today_add">
                <el-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                </el-card>
            </div>
            <div class="total">
                <el-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                </el-card>
            </div>
        </div>
        <div class="content" v-if="student.length > 0">我是内容</div>
        <el-empty v-else description="暂无数据" />
        <div class="page">
            <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
                layout="prev, pager, next, jumper,->,sizes,total" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let student = ''

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}

</script>

<style scoped>
.register_container {

    .card {
        display: flex;
        .time {
            width: 10%;
            margin-right: 50px;
        }
        .today_add{
            width:30%;
            margin-right: 50px;
        }
        .total{
            width: 30%;
        }
    }
}
</style>