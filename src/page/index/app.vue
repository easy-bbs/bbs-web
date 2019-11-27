<template>
  <div class="mid-a" id="app">
    <Nav></Nav>

    <table style="width: 1198px">
      <tbody v-for="item in wenZhang">
        <tr>
          <th>
            <div>
              <a>
                <img id="img" width="60px" src="./cg.png" />
              </a>
            </div>
            <div class="content">
              <a :href="href">
                <span>{{item.title}}</span>
              </a>
              <div class="info">
                <a class="clear">
                  <em class="replies">{{item.commentCount}}</em>
                  <img class="images" src="./comment.png" />
                </a>
                <span class="tag"></span>
                <em>
                  <a :href="href">{{item.userName}}</a>
                </em>
                <em>{{item.date}}</em>
                <a href class="view" style="color:#aaa">
                  <img  src="./pageview.png" alt style="float: left;margin-top: 6px;" />
                  {{item.clickRate}}
                </a>
              </div>
            </div>
            <div style="margin-left:82px">
              <div>
                {{item.text}}
                <ul>
                  <li v-for="item1 in item.arr">
                    <div class="img" v-bind:style="'backgroundImage:url('+item1+ ')'"></div>
                  </li>
                </ul>
              </div>
            </div>
          </th>
          <td></td>
        </tr>
      </tbody>
    </table>
    <Page></Page>
  </div>
</template>
<script>
import Page from "./childComponents/pag.vue";
import Nav from "./childComponents/nav.vue";

import { request } from "../../network/request";
export default {
  name: "app",
  components: {
    Page,
    Nav
  },
  data() {
    return {
      userDater:{},
      wenZhang: [
        {
          title: "神秘之旅",
          date: 2019,
          arr: [require("./a.jpg"), require("./cg.png"), require("./a.jpg")],
          userName: "slw",
          clickRate: 18,
          commentCount: 90
        },
        {
          title: "第二篇文章",
          date: 2019,
          userName: "abc",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          clickRate: 18,
          commentCount: 90
        },
        {
          title: "第三篇文章",
          date: 2019,
          userName: "sdg",
          arr: ["./a.jpg", "./cg.png", "./a.jpg"],
          clickRate: 18,
          commentCount: 90
        }
      ],
      href: "#"
    };
  },
  methods: {
    
    getMessage() {
      request(
        {
          url: "/hello?name=slw&age=18"
        },
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          console.log("不是程序错误");
        }
      );
    },
    getUser(){
      let token=window.sessionStorage.token;
      request(
        {
          method: "post",
          url: "getUser",
          data:{
            "token":token,
          }
        },
        res=>{
          console.log(res)
          this.userDater=res.data;
        },{}
      )

    }
  },
  created(){
    this.getUser()
  }
}
</script>

<style>
em {
  margin-right: 20px;
  zoom: 1;
  color: #c4c4c4;
  font-size: 13px;
  *margin-top: 20px;
}
</style>