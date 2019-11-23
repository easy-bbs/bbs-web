import Vue from "vue";

import Login from './login.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
    el:"#login",
    // template:"<app></app>",
    // components:{
    //     app
    // }
    render: h => h(Login)
});


