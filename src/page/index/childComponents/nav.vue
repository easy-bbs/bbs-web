<template>
  <div>
    <!--    导航栏-->
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">QQSG轻论坛</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" style="padding-right: 15px">
            <span class="iconfont icon-search" style="position: relative;left: 20px"></span>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style="padding-left: 20px"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <div class="login">
            <div v-if="loginFlag">
              <a href="login.html">
                <span>登录</span>
              </a>
            </div>
            <div v-if="!loginFlag">
              <a href="user.html">
                <img src="../a.jpg" class="layui-nav-img" />
              </a>
              <a href="#">
                <span @click="logout">退出</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!--导航栏end-->
  </div>
</template>

<script>
import Login from "./login.vue";
export default {
  components: {
    Login
  },
  data() {
    return {
      flag: "display:none",
      loginFlag: true
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.loginFlag=true
    }
  },
  created(){
    console.log(window.sessionStorage.token);
    if(window.sessionStorage.token) this.loginFlag=false
  }
};
</script>

<style>
.login a,
.lo {
  float: left;
}
</style>
