<template>
  <div class="index" :style="dialogFormVisible">
    <div class="index_pc_bj">
      <el-form :model="form" :rules="ruleLogin">
        <div class="wrap_conter">
          <ul style="list-style: none;box-shadow:10px 10px 20px rgba(0,0,0,.5);">
            <li style="border-bottom: 1px solid #e9eaec;">
              <div class="content">
                <!-- <img src="../images/logo.jpg" style="width: 40px;height: 40px;" align="absmiddle" /> -->
                <span style="font-size: 15px">
                  欢迎登录
                </span>
               </div> 
            </li>
            <li>
              <!-- <div class="name-password-error" v-if="this.$store.state.ifSign">用户名或密码错误</div> -->
              
                <el-form-item label="用户名" :label-width="formLabelWidth" prop="userName">
                  <el-col :span="12">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                  <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>

                <!-- <el-form-item >
                  <Button type="primary" @click="login('formLogin')" style="width: 250px">登录</Button>
                  <!-- <ul class="account-list">
                    <li>
                      <a
                        href="https://github.com/login/oauth/authorize?client_id=bbb5cc2034eb62484c1c&state=github"
                        style="{right: 26px;}"
                      >
                        <!-- <Icon  style="color: rebeccapurple;" size="40" type="social-github"></Icon> -->
                        <!-- <img class="icon" src="../images/GitHub.svg" /> -->
                      <!-- </a>
                    </li> -->

                    <!-- <li>
                      <a
                        href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101512648&redirect_uri=http://www.lovemtt.com/qq&state=qq"
                        style="{right: 26px;}"
                      >
                        <img class="icon" src="../images/social-qq.svg" />
                      </a>
                    </li> -->
                  <!-- </ul> -->
                <!-- </el-form-item >  -->
             
            </li>
          </ul>
        </div>
      </el-form>
    </div>
    <!-- Form -->
    <!-- <el-button type="text" @click="dialogFormVisible = true" style="color:black">登录</el-button> -->

    <!-- <el-dialog class="loginbox" title="登录" :visible.sync="dialogFormVisible" center="true">
      <!-- <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-col :span="12">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    <el-button slot="footer" @click="sumitForm">登录</el-button>-->
    <!-- </el-dialog> -->
  </div>
</template>


<style>
.index {
  align-items: center;
  /* display: flex; */
  width: 100%;
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
.index .ivu-row-flex {
  height: 100%;
}
.index_pc_bj {
  width: 100%;
  height: auto;
  background-size: cover;
  overflow: hidden;
  background-position: center center; /*box-shadow: 0 0px 3px rgba(0,0,0,.5);*/
  text-align: center;
}
.wrap_conter ul {
  position: relative;
  width: 300px;
  border-radius: 5px;
  background: #fff;
  margin: 0 auto;
}
.wrap_conter li {
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 30px;
  padding: 0 25px 0px 25px;
  width: 100%;
}
.content {
  color: #1c2438;
  line-height: 40px;
  display: block;
  text-align: left;
  padding: 5px 0 0 0;
  margin: 0 80px 0 20px;
}
.pc-hign {
  height: 75px;
  display: inline-table;
}
.wrap_conter li dl {
  width: 100%;
  margin-top: 20px;
}
.name-password-error {
  padding-bottom: 2px;
  text-align: left;
  line-height: 1;
  color: #ed3f14;
}
.ivu-form-item-content .account-list {
  width: auto;
  padding-top: 10px;
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
<script>
import { request } from "../../../network/request";
export default {
  props: ["dialogFormVisible"],
  data() {
    return {
      form: {
        name: "",
        password: "",

        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "70px",
       ruleLogin: {
        userName: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    sumitForm() {
      request(
        {
          url:
            "/hello?name=" + this.form.name + "&password=" + this.form.password
        },
        res => {
          console.log("res");
        },
        err => {
          console.log(err);
          console.log("不是程序错误");
        }
      );
    }
  }
};
</script>
