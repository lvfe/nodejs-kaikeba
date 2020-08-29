const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
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
    resolveLoader: {
    modules: ["./node_modules", "./src/myloaders"],
    },
    module: {
        rules: [
            {
                //loader是有执行顺序的， 从后往前
                test: /\.css$/,
                use: ["style-loader","css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["styleLoader","cssLoader", "lessLoader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader:"file-loader",
                    options: {
                        name: "assets/images/[name].[ext]"
                    }
                }
            }
        ],
    },
    devtool: "source-map", //影响构建速度， 重建速度，
    // cheap只是行信息，不是列信息, inline混合在一起， eval速度包裹信息
    plugins: [new htmlWebpackPlugin({
        template: "./src/index.html",
        filename: "laohan.html"
    })],
    devServer: {
        port: 8081,
        open: true,
        contentBase: "./dist",
        proxy: {
            "/api": {
                target: "http://localhost:9092/api"
            }
        }
    },
    hot: true,
    hotOnly: true //css
}