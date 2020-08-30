const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TxtWebpackPlugin = require("./myplugins/text-webpack-plugin");
module.exports = {
  // entry入口
  entry: "./hello.js",
  //output出口
  output: {
    //指定输出资源的存放目录，或者位置
    path: path.resolve(__dirname, "./dist"), //必须是绝对路径， 引入path
    filename: "main.js",
  },
  //mode
  mode: "development", // 不会被压缩， 有可读性
};
