<template>
  <div class="message_container">
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.user" placeholder="请输入学生姓名" clearable />
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="formInline.user" placeholder="请输入学号" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="operate">
      <el-row class="mb-4">
        <el-button type="danger">批量删除</el-button>
        <el-button type="primary" @click="changeActive('/home/student/add')">新增学生</el-button>
      </el-row>


      <!-- 
      <form ref="uploadForm" enctype="multipart/form-data" class="upload-form" @submit.prevent="submitFile">
        <input type="file" name="file" id="file" class="input-file" ref="file" @change="handleFileChange" />
        <label for="file" class="btn">选择文件</label>
         进度条展示 
        <p v-if="showProgress">上传进度：{{ percent }} %</p>
        <button type="submit" class="upload-btn" :disabled="!selectedFile">上传</button>
      </form>

 -->


    </div>
    <div class="content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
    <!-- <div class="content" v-if="student.length > 0">学生信息</div> -->
    <!-- <el-empty v-else description="暂无数据" /> -->
    <div class="page">
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
        :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper,->,sizes,total"
        :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'
import { useRouter } from "vue-router";

let $router = useRouter();


const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}

//左侧菜单点击事件的回调
const changeActive = (path: string) => {
  //跳转到对应二级路由
  $router.push({ path });
};


// function handleFileChange (event) {
//       selectedFile = event.target.files[0];
//     }
// function    submitFile () {
//       if (!selectedFile) return;
//       // 新建 from 对象
//       const formData = new FormData();
//       formData.append('file', selectedFile, selectedFile.name);

//       showProgress = true;
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//         onUploadProgress: progressEvent => {
//           // 计算上传进度百分比
//           this.percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//         },
//       };
//       axios.post('/api/upload', formData, config)
//         .then((response) => {
//           console.log(response);
//           this.showProgress = false;  // 移除 progress 条
//         })
//         .catch((error) => {
//           console.log(error);
//           this.showProgress = false;
//         });
//     }

</script>

<style scoped>
.message_container {
  .search {
    margin-top: 10px;
  }
}
</style>