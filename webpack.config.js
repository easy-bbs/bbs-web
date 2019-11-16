const path =require('path')
module.exports={
    entry:{
        main1:'./src/page/index/index.js',
        main2:'./src/page/user/user.js'

    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.js/,
                exclude:/(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            }
        ]
    },
    mode: 'production',
    devServer:{
        contentBase:"./dist",
        inline:true,
        port:'8085'
    }
}