<template>
  <div>
      <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >编辑添加</el-button
          >
    <el-table :data="arr">
      <!-- <el-table-column prop="id" label="文章标题"> </el-table-column> -->

      <el-table-column prop="title" label="文章标题"> </el-table-column>

      <el-table-column prop="name" label="作者"> </el-table-column>

      <el-table-column prop="num" label="浏览量"> </el-table-column>

      <el-table-column prop="text" label="回复"> </el-table-column>

      <!-- 操作 -->
      <el-table-column label="操作">
          <!-- 编辑删除 -->
        <template slot-scope="scope" >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import inals from '../api/index'
export default {
  name: "Cont1",
  data(){
      return{
          arr:null
      }
  },
  methods:{

    handleDelete(){
        // this.deleteHomeIndex(a)
        this.$confirm("此操作将要永久删除改条信息","提示",{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(()=>{
            // 点击确定的回调函数
            console.log("删除了")
            this.deleteHomeIndex(a)
            // this.getHomeIndex();
        })
    },
    
    async getHomeIndex() {
      let { data } = await inals.get("/about");
    //   console.log(data);
      this.arr = data;
    },
      async deleteHomeIndex(index){
       let {data} = await inals.delete("/about/"+index)
       console.log(data)
       this.getHomeIndex();
    },
  },
  created(){
      this.getHomeIndex()
  }
};
</script>