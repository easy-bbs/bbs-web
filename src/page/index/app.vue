<template>
    <div class="mid-a" id="app">   
        <button @click="getMessage">点击</button>  
        <table style="width: 1198px">
            <tbody v-for="item in wenZhang">
                <tr>
                    <th>
                        <div><a><img id="img" width="60px" src="cg.png"></a></div>
                        <div class="content">
                            <a :href="href"><span>{{item.title}}</span></a>
                            <div class="info">
                                <a class="clear">
                                    <em class="replies">0</em>
                                    <img class="images" src="comment.png">
                                </a>
                                <a href="" class="view" style="margin-top: 8px">
                                    <img src="pageview.png" alt="" style="float: left">1200
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
    </div>
</template>
<script>

import {request} from "../../network/request"
export default{
    name:"app",
     data(){
        return {
            wenZhang:[
                {title:"神秘之旅",date:2019,arr:["a.jpg","Public/cg.png","/a.jpg"]},
                {title:"第二篇文章",date:2019,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
                {title:"第三篇文章",date:2019,arr:["/a.jpg","cg.png","Public/a.jpg"]},
            ],
            href:"#"
        }
    },
    methods:{
        dian(){
            this.wenZhang=[
                {title:"第六篇文章",date:2019,arr:["Public/a.jpg","Public/cg.png","Public/a.jpg"]},
                {title:"第五篇文章",date:2019,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
                {title:"第三篇文章",date:2019,arr:["Public/a.jpg","Public/cg.png","Public/a.jpg"]},
            ];
            
        },
        getMessage(){
            request({
                url:"/hello?name=slw&age=18",
            },res=>{
                console.log(res)
            },err=>{
                console.log(err)
                console.log("不是程序错误")
            })
        }
    }
   
}
</script>

<style>

</style>