<template>
  <div class="home">
    <div class="title">Login Form</div>
    <div class="box">
      <el-form :model="ruleForm" :rules="rules">
        <el-form-item prop="name">
          <el-input type="name" class="inp" placeholder="admin" v-model="ruleForm.name">
          </el-input>
        </el-form-item>

        <el-form-item prop="pw" class="lab">
          <el-input type="pw" class="inp" placeholder="Password" v-model="ruleForm.pw"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="btm" @click="getfn">login</el-button>

          <span class="sp">username: admin</span>
          <span class="sp">password: any</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import inals from '../api/index'
export default {
  name: "HomeView",
  data() {
    var validateName = (rule, value, callback) => {
      let rg = /^\w{5,10}$/;
      if (value === "") {
        callback(new Error("Please enter the correct user name"));
      }
      if (rg.test(value)) {
        return;
      } else {
        callback(new Error("Please enter the correct user name"));
      }
    };

    var validatePass = (rule, value, callback) => {
      let rg = /^\w{5,10}$/;
      if (value === "") {
        callback(new Error("The password can not be less than 6 digits"));
      }
      if (rg.test(value)) {
        return;
      } else {
        callback(new Error("The password can not be less than 6 digits"));
      }
    };

    return {
      ruleForm: {
        name: "",
        pw: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pw: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    async getfn() {   //点击登陆按钮，设置本地存储，和后台数据通信
      let name = this.ruleForm.name;
      let pw = this.ruleForm.pw;
      let { data } = await inals.post("/home", { name, pw });
      console.log(data);

      if (data.message == "success") {
        localStorage.setItem("token", data.data.token);
        console.log(this);
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success",
          onClose: () => {
            this.$router.push("/home2");
          },
        });
      }

      if (data.message == "fill") {
        this.$message({
          showClose: true,
          message: "错了哦，这是一条错误消息",
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  background: #2d3a4b;
}
.home .title{
  padding-top: 160px;
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}
.box{
  width: 450px;
  margin: 0 auto;
}
.inp{
  background: none;
  height: 50px;
}
.btm{
  width: 100%;
  margin-bottom: 30px;
}
.sp{
    font-size: 14px;
    color: #fff;
    margin-right: 20px;
}
</style>
