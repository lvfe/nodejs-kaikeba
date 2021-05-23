const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
  },
  mode: "development",
  //模块转换规则
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ],
      },
    ],
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "./src/[name.[hash].css",
      chunkFilename: "csss/[id].css",
    }),
  ],
  //开发服务器
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    host: "localhost",
    port: 8000,
    compress: true,
  },
};
