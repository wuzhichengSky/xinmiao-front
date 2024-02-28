<template>
    <div class="register_container">

        <div class="card">
            <div class="time">
                <el-card class="box-card1">
                    <p>2月28</p>
                </el-card>
            </div>
            <div class="today_add">
                <el-card class="box-card2">
                    <div class="today_icon">
                        <el-icon>
                            <Tickets />
                        </el-icon>
                    </div>
                    <div class="today_text">
                        <span>今日新增审核</span>
                        <p>66</p>
                    </div>
                </el-card>
            </div>
            <div class="total">
                <el-card class="box-card3">
                    <el-icon><Coin /></el-icon>
                    <p>待审总和</p>
                    <p>222</p>
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
import { Tickets,Coin } from '@element-plus/icons-vue'

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
            height: 100px;
        }

        .today_add {
            display: flex;
            width: 200px;
            margin-right: 50px;

            .today_icon,
            .today_text {
                display: flex;
                /* 将子项设置为 Flexbox */
                flex-direction: row;
                /* 设置为水平排列 */
            }
        }

        .total {
            width: 30%;
        }
    }
}</style>