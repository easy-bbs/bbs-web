const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:{
        index:'./src/page/index/index.js',
        user:'./src/page/user/user.js',
        login:'./src/page/login/login.js'
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
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:100
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
            
        ]
    },
    mode: 'production',
    devServer:{
        contentBase:"./dist",
        inline:true,
        port:'8085'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/page/index/index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'user.html',
            template:'./src/page/user/user.html',
            chunks:['user']
        }),
        new HtmlWebpackPlugin({
            filename:'login.html',
            template:'./src/page/login/login.html',
            chunks:['login']
        })
    ]
}