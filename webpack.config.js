
const webpack = require("webpack");
const path = require('path');
//导入在内存中生成 html 页面的插件 plugin
// 只要是插件，都一定要放到 plugin 节点中去
// const htmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack 4.0 后 vue-loader 必须引入 const VueLoaderPlugin = require('vue-loader/lib/plugin') 才能使用匹配vue 结尾的文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports={
    mode:"development",
    entry:path.join(__dirname,"./src/main.js"),
    output: {
        path:path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath:"dist"   // webpack4 后自动打包更新需要指定输出的路径，这个不能少
    },
    devServer: {
        contentBase:"src",
        host: "localhost",
        port: "8080",
        open: true,
        hot:true
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),// new 一个热更新的模块对象
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template:"./src/index.html", // 指定内存页面，创建一个内存页面
            filename: "index.html",
        })
    ],
    module:{
        rules:[
            // 匹配 vue 的文件， cnpm i vue -s / cnpm i vue-loader -D
            {test:/\.vue$/,use:["vue-loader"]},
            // {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.css$/,use:["vue-style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.sass$/,use:["style-loader","css-loader","sass-loader"]},
            //处理图片的路径 loader
            //limit 给定的值，是图片的大小，单位是byte,如果我们引入的图片，大于或等于给定的 limit 值，则不会被转化为
            //base64 格式的字符串，如果图片小于给定的 limit 值，则会被转为 base64 的字符串
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:["url-loader?limit=76&name=[hash:8]-[name].[ext]"]},
            // 匹配字体
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},
            // 匹配 babel 用于将高级的类方法转成低级的语法
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
        ]
    },
    // 修改导入 vue 的默认文件
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
};
