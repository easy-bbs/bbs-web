import Vue from "vue"
import app from "./app.vue"

 new Vue({
    el:"#app",
    // template:"<app></app>",
    // components:{
    //     app
    // }
    render: h => h(app)
});
require('./artid.css')
require('../../assets/css/base.css')
