//babel 核心库，用来实现核心转换引擎
const babel = require("@babel/core");
const { functionExpression } = require("babel-types");
//类型判断，生成AST零部件
const types = require("babel-types");

//源代码
const code = `class Person {
    constructor(name) {
        this.name=name;
    }
    sayName() {
        return this.name;
    }
  }`;
const expect = `function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    return this.name;
};`;
let visitor = {
  ClassDeclaration(path) {
      const {id, body} = path.node;
      const bbody = body.body[0];
      let funs = [];
      const constructor = types.functionDeclaration(id, bbody.params, bbody.body, false, false);
      funs.push(constructor);
      const pbody = body.body[1];
     
      const source = types.memberExpression(id, types.identifier('prototype'), false);
      const left = types.memberExpression(source,pbody.key,pbody.computed);
     const right = types.functionExpression(null, pbody.params, pbody.body, false, false  );
      const proto = types.assignmentExpression('=', left, right); 
      funs.push(proto);
    path.replaceWithMultiple(funs);
  },
};
let result = babel.transform(code, {
  plugins: [
    {
      visitor,
    },
  ],
});
console.log(result.code);
