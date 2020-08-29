npm i webpack webpack-cli -D

零配置webpack4.x
默认入口： src/index.js
默认出口: dist/main.js 输入资源的名称
mode： production

可以指定esm rollup

npx webpack // npx node自带的
npm run dev

webpack自定义配置文件：零配置太弱
先查找webpack.config.js

rollup比webpack打包的干净， 少语法定义


浏览器不认识module.exports，import需要script type="module"
浏览器也不认识 __webpack_require__

webpack核心概念
entry： webpack执行构建的入口
output：配置资源输出的位置和名称
mode:打包构建模式，production压缩 development不压缩利于查找

module:模块，weboack基于Node，有一切给予模块额概念（img, css etc）
chunk: 代码片段，有入口模块和依赖模块生成
bundle: 打包后输入到资源目录的文件， 构建成功后的输出文件
bundle=webpackbootstrap+chunk

spa-bundle->chunk->entry->modules/moudles/moudles/...

loader:模块转化，webpack不认识css等。 需要使用插件
plugin:

MPA SPA
MPA多页面应用，有多个入口
spa只有一个入口，一个Chunk
css loader作用单一，只知道如果处理语法
style-loader 动态生成style标签，js生成style

post-css //
1. css3新特性加前缀
2. rem转px
css4新特性
https://github.com/postcss/postcss/blob/master/docs/plugins.md

sourceMap
1. 帮助定位错误

如何在生产环境部署sourcemap
开启了好处坏处
开启了设置成什么值：source-map, hidden-source-map(没有索引)， nosource-source-map（不包含source content）
不应该将Sourcemap部署到服务器，而是作为错误报告工具


webpackDevServer
硬件启动，而不是dist folder
