<template>
    <div index_container>
        <div class="top">
            <div class="card1">
                <el-card class="box-card1">
                    <div class="content">
                        <div class="left">
                            <el-icon>
                                <UserFilled />
                            </el-icon>
                        </div>
                        <div class="right">
                            <p>{{ studentIdentifyTotal }}/{{ studentTotal }}</p>
                            <p>注册人数/学生总数</p>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="card2">
                <el-card class="box-card2">
                    <div class="content">
                        <div class="left">
                            <el-icon>
                                <List />
                            </el-icon>
                        </div>
                        <div class="right">
                            <p> {{ taskTotal }} </p>
                            <p>发布任务数</p>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="card3">
                <el-card class="box-card3">
                    <div class="content">
                        <div class="left">
                            <el-icon>
                                <VideoCameraFilled />
                            </el-icon>
                        </div>
                        <div class="right">
                            <p>88</p>
                            <p>广告投放数</p>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="card4">
                <el-card class="box-card4">
                    <div class="content">
                        <div class="left">
                            <el-icon>
                                <Comment />
                            </el-icon>
                        </div>
                        <div class="right">
                            <p>888</p>
                            <p>待审核任务数</p>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="middle">
            <el-text class="mx-1" size="large">数据统计</el-text>
        </div>
        <div class="bottom">
            <div class="card_map">
                <el-card class="box-map">
                    <div class="content">
                        <div class="left">学生注册数据图</div>
                    <div class="right">学生任务完成情况图</div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//左侧菜单需要用到的图标
import {
    UserFilled, List, VideoCameraFilled, Comment
} from "@element-plus/icons-vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { ResponseData } from "@/api/user/type";
import { reqStudentTotal, reqStudentIdentifyTotal } from "@/api/user";
import { reqTaskTotal } from "@/api/task";


let studentTotal = ref('')
let studentIdentifyTotal = ref('')
let taskTotal = ref('')

onMounted(async () => {
    let result1: ResponseData = await reqStudentTotal();
    let result2: ResponseData = await reqStudentIdentifyTotal();
    let result3: ResponseData = await reqTaskTotal();
    if (result1.code == 200 && result2.code == 200 && result3.code == 200) {
        studentTotal.value = String(result1.data)
        studentIdentifyTotal.value = String(result2.data)
        taskTotal.value = String(result3.data)
        return 'ok';
    } else {
        return Promise.reject(new Error(result1.message));
    }
});

</script>

<style scoped>
.top {
    display: flex;
    align-items: center;

    .card1 {
        display: flex;
        padding: 5px;
        margin-right: 30px;

        .box-card1 {
            display: flex;
            align-items: center;
            /* 垂直对齐 */
            height: 90px;
            width: 150px;

            .content {
                display: flex;
                align-items: center;
                /* 垂直对齐  */
            }

            .left {
                margin-right: 10px;
            }

            .right {
                font-size: 12px;

                p {
                    margin: 4px;
                }
            }
        }

    }

    .card2 {
        display: flex;
        padding: 5px;
        margin-right: 30px;


        .box-card2 {
            display: flex;
            align-items: center;
            /* 垂直对齐 */
            height: 90px;
            width: 150px;

            .content {
                display: flex;
                align-items: center;
                /* 垂直对齐  */
            }

            .left {
                margin-right: 10px;
            }

            .right {
                font-size: 12px;

                p {
                    margin: 4px;
                }
            }
        }





    }

    .card3 {
        padding: 5px;
        margin-right: 30px;

        .box-card3 {
            display: flex;
            align-items: center;
            /* 垂直对齐 */
            height: 90px;
            width: 150px;

            .content {
                display: flex;
                align-items: center;
                /* 垂直对齐  */
            }

            .left {
                margin-right: 10px;
            }

            .right {
                font-size: 12px;

                p {
                    margin: 4px;
                }
            }
        }
    }

    .card4 {
        padding: 5px;
        margin-right: 30px;

        .box-card4 {
            display: flex;
            align-items: center;
            /* 垂直对齐 */
            height: 90px;
            width: 150px;

            .content {
                display: flex;
                align-items: center;
                /* 垂直对齐  */
            }

            .left {
                margin-right: 10px;
            }

            .right {
                font-size: 12px;

                p {
                    margin: 4px;
                }
            }
        }
    }


}

.middle {
    margin: 10px;
}

.bottom {

    .box-map {
        height: 320px;
        .content {
            display: flex;
            .left{
                flex: 6
            }
            .right {
                flex: 4
            }
        }
    }
}
</style>