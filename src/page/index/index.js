import Vue from "vue";
import app from "./app.vue";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
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
