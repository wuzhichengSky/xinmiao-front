<template>
    <div index_container>
        <div class="top">


            
            <div class="card1">
                <el-card class="box-card1">
                    <div class="left">我是图标</div>
                    <div class="right">我是文字</div>
                </el-card>
            </div>
            <div class="card2">
                <el-card class="box-card2">
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                </el-card>
            </div>
            <div class="card3">
                <el-card class="box-card3">
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                </el-card>
            </div>
            <div class="card4">
                <el-card class="box-card4">
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                </el-card>
            </div>
        </div>
        <div class="middle">
            <el-text class="mx-1" size="large">数据统计</el-text>
        </div>
        <div class="bottom">下</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.top {
    display: flex;
    .card1 {
        padding: 5px;
        margin-right: 30px;

        .box-card1 {
            display: flex;
            flex-direction: row;
            height: 90px;
            width: 150px;
        }
    }
    .card2 {
        padding: 5px;
        margin-right: 30px;

        .box-card2 {
            height: 90px;
            width: 150px;
        }
    }
    .card3 {
        padding: 5px;
        margin-right: 30px;

        .box-card3 {
            height: 90px;
            width: 150px;
        }
    }
    .card4 {
        padding: 5px;

        .box-card4 {
            height: 90px;
            width: 150px;
        }
    }

}

.middle {
    margin: 10px;
}

</style>