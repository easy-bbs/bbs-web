import Vue from "vue";
import User from "./user.vue";
import "../../assets/css/base.css"
new Vue({
    el:"#app",
    render: h => h(User)
})