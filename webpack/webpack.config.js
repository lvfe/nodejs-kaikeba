const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanwebpackplugin= require("clean-webpack-plugin");
module.exports = {
    // entry入口
    entry: "./src/index.js",
    //output出口
    output:{
        //指定输出资源的存放目录，或者位置
        path: path.resolve(__dirname, "./build"), //必须是绝对路径， 引入path
        filename:"main.js"
    },
    //mode
    mode: "development", // 不会被压缩， 有可读性
    module: {
        rules: [
            {
                //loader是有执行顺序的， 从后往前
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader", "less-loader"]
            }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: "./src/index.html",
        filename: "laohan.html"
    })]
}