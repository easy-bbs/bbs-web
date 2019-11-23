<template>
  <div class="index">
    <div class="loginPage">
      <h1>登录</h1>
      <el-form>
        <el-form-item>
          <el-input
            type="text"
            id="user"
            prefix-icon="el-icon-user-solid"
            v-model="formName.name"
            @blur="inputBlur('user',formName.name)"
          ></el-input>
          <p>{{formName.userError}}</p>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            id="password"
            prefix-icon="el-icon-lock"
            v-model="formName.password"
            @blur="inputBlur('password',formName.password)"
          ></el-input>
          <p>{{formName.passwordError}}</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" v-bind:disabled="formName.beDisabled">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
          <ul class="account-list">
            <li>
              <a
                href="https://github.com/login/oauth/authorize?client_id=bbb5cc2034eb62484c1c&state=github"
                style="{right: 26px;}"
              >
                <!-- <Icon  style="color: rebeccapurple;" size="40" type="social-github"></Icon> -->
                <img class="icon" src="../../assets/images/GitHub.svg" />
              </a>
            </li>

            <li>
              <a
                href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101512648&redirect_uri=http://www.lovemtt.com/qq&state=qq"
                style="{right: 26px;}"
              >
                <img class="icon" src="../../assets/images/social-qq.svg" />
              </a>
            </li>
          </ul>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      formName: {
        //表单中的参数
        user: "",
        userError: "",
        password: "",
        passwordError: "",
        beDisabled: true
      },
      data: [],
      beShow: false //传值给父组件
    };
  },
  methods: {
    resetForm: function() {
      this.formName.name = "";
      this.formName.userError = "";
      this.formName.password = "";
      this.formName.passwordError = "";
    },
    submitForm() {
      request(
        {
          method: "post",
          url: "hello",
          data: this.formName
        },
        res => {
          this.data = res.data;
          if (res.data.stame == 200) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            window.sessionStorage.setItem("token", "123456");
            window.location.href = "index.html";
          }
          if(res.data.stame == 400){
            this.$message({
              message: "登录失败",
              type: "error"
            });
          }

          //设置token
        },
        eer => {}
      );
    },
    inputBlur: function(errorItem, inputContent) {
      if (errorItem === "user") {
        if (inputContent === "") {
          this.formName.userError = "用户名不能为空";
        } else {
          this.formName.userError = "";
        }
      } else if (errorItem === "password") {
        if (inputContent === "") {
          this.formName.passwordError = "密码不能为空";
        } else {
          this.formName.passwordError = "";
        }
      }
      //对于按钮的状态进行修改
      if (this.formName.name != "" && this.formName.password != "") {
        this.formName.beDisabled = false;
      } else {
        this.formName.beDisabled = true;
      }
    }
  }
};
</script>

<style>
.index {
  width: 100%;
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.loginPage {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -175px;
  width: 350px;
  min-height: 300px;
  padding: 30px 20px 20px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #fff;
}
.loginPage p {
  color: red;
  text-align: left;
}
.account-list {
  padding: 0;
}
.account-list li {
  width: auto;
  display: inline-block;
}

.account-list .icon {
  width: 35px;
  height: 40px;
}
</style>