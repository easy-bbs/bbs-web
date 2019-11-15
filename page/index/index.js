const app= new Vue({
    el:"#app",
    // render:h=>h({
    //         template:"#con",
    //         data(){
    //             return {
    //                 wenZhang:[
    //                     {title:"第一篇文章",date:2019,arr:["Public/a.jpg","Public/cg.png","Public/a.jpg"]},
    //                     {title:"第二篇文章",date:2019,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
    //                     {title:"第三篇文章",date:2019,arr:["Public/a.jpg","Public/cg.png","Public/a.jpg"]},
    //                 ],
    //                 href:"#"
    //             }
    //         },
    //         methods:{
    //             dian(){
    //                 this.wenZhang=[
    //                     {title:"第六篇文章",date:2019,arr:["Public/a.jpg","Public/cg.png","Public/a.jpg"]},
    //                     {title:"第五篇文章",date:2019,text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
    //                     {title:"第三篇文章",date:2019,arr:["Public/a.jpg","Public/cg.png","Public/a.jpg"]},
    //                 ]
    //             }
    //         }
    // })
    
    template:'<con></con>',
    components:{
        con:{
            template:"#con",
            data(){
                return {
                    wenZhang:[
                        {title:"第一篇文章",date:2019,arr:["a.jpg","Public/cg.png","/a.jpg"]},
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
                    axios({
                        url:"http://localhost/hello?name=slw&age=18",
                    }).then(function(res){
                        console.log("成功")
                        console.log(res)
                        console.log(res.data.name)
                        console.log(this.wenZhang)
                        this.wenZhang=res.data
                        
                    })
                }
            }
        }
    }
});
