<template>
    <div class="register_container">

        <div class="card">
            <div class="time">
                <el-card class="box-card1">
                    <template #header>
                        <div class="card-header">
                            <span>2月</span>
                            <el-button class="button" text>28号</el-button>
                        </div>
                    </template>
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    <template #footer class="footer">Footer content</template>
                </el-card>
            </div>
            <div class="today_add">
                <el-card class="box-card2">
                    <div class="content">
                        <div class="left">
                            <el-icon>
                                <Tickets />
                            </el-icon>
                        </div>
                        <div class="right">
                            <p>今日新增审核</p>
                            <p>66</p>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="total">
                <el-card class="box-card3">
                    <div class="content">
                        <div class="left"><el-icon>
                                <Coin />
                            </el-icon></div>
                        <div class="right">
                            <p>待审总和</p>
                            <p>222</p>
                        </div>
                    </div>
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
import { Tickets, Coin } from '@element-plus/icons-vue'

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
            display: flex;
            padding: 5px;
            margin-right: 30px;

            .box-card1 {
                width: 130px;
                height: 90px;

                
            }
        }

        .today_add {
            display: flex;
            padding: 5px;
            margin-right: 30px;

            .box-card2 {
                width: 250px;
                height: 90px;
                display: flex;
                align-items: center;

                .content {
                    display: flex;
                    align-items: center;
                    /* 垂直对齐  */

                    .left {
                        margin-right: 7px;
                    }
                    .right {
                        p {
                            margin: 5px;
                        }
                    }
                }
            }
        }

        .total {
            display: flex;
            padding: 5px;
            margin-right: 30px;

            .box-card3 {
                width: 200px;
                height: 90px;
                display: flex;
                align-items: center;

                .content {
                    display: flex;
                    align-items: center;
                    /* 垂直对齐  */

                    .left {
                        margin-right: 7px;
                    }
                    .right {
                        p {
                            margin: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>