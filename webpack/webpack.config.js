const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TxtWebpackPlugin = require("./myplugins/text-webpack-plugin");
module.exports = {
  // entry入口
  entry: "./src/index.js",
  //output出口
  output: {
    //指定输出资源的存放目录，或者位置
    path: path.resolve(__dirname, "./build"), //必须是绝对路径， 引入path
    filename: "main.js",
  },
  //mode
  mode: "development", // 不会被压缩， 有可读性
  resolveLoader: {
    modules: ["./node_modules", "./src/customLoader"],
  },
  module: {
    rules: [
      {
        //loader是有执行顺序的， 从后往前
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["styleLoader", "cssLoader", "lessLoader"],
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images/",
          },
        },
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "assets/html/index.html",
    }),
    new TxtWebpackPlugin({
        name: "connie"
    })
  ],
};
