const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const path = require("path");
const babel = require("@babel/core");
const { transformFromAst } = babel;
module.exports = class webpack {
  constructor(options) {
    this.entry = options.entry;
    this.output = options.output;
    this.modules = [];
  }
  run() {
    const info = this.parse(this.entry);
    this.modules.push(info);
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      // this.parse(this.modules[dependencies])
      const { dependencies } = item;
      if (dependencies) {
        for (let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }
    const obj = {};
    this.modules.forEach((item) => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code,
      };
    });
    console.log(obj);
    this.file(obj);
  }
  parse(entryFile) {
    console.log(entryFile);
    const content = fs.readFileSync(entryFile, "utf-8");
    const ast = parser.parse(content, {
      sourceType: "module",
    });
    //对抽象语法树的操作， @babel/traverse
    const dependencies = {};
    const dirname = path.dirname(entryFile);
    console.log(dirname);
    traverse(ast, {
      ImportDeclaration({ node }) {
        // for windows
        const path1 = ".\\" + path.join(dirname, node.source.value);
        console.log(path1,123);
        dependencies[node.source.value] = path1;
      },
    });
    console.log(dependencies);
    //路径拼接path.join()
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    }); //生辰chunk, 但是浏览器不认识require， concat
    console.log(code);
    return {
      dependencies,
      code,
      entryFile,
    };
  }
  file(code) {
    //生成bundle启动器函数
    const filepath = path.join(this.output.path, this.output.filename);

    const newCode = JSON.stringify(code);
    const bundle = `(function(graph){
        function require(module){
            function otherRequire(relativePath){
               return require(graph[module].dependencies[relativePath])
            }
            var exports = {};
            (function(require, exports, code){
                eval(code)
            })(otherRequire, exports,graph[module].code)
            return exports;
        }
        require('${this.entry}')
    })(${newCode})`;
    //生成资源文件， 根据位置
    fs.writeFileSync(filepath, bundle, "utf-8");
  }
};
