//babel 核心库，用来实现核心转换引擎
const babel = require('@babel/core')
//类型判断，生成AST零部件
const types = require('babel-types')

//源代码
const code = `const sum=(a,b)=>a+b;` //目标代码 const sum = function(a,b){ return a + b }
let visitor = {
    ArrowFunctionExpression(path){
        let params = path.node.params;
        //创建一个blockStatement
        let blockStatement = types.blockStatement([
            types.returnStatement(types.binaryExpression(
                '+',
                types.identifier('a'),
                types.identifier('b')
            ))
        ]);
        //创建一个函数
        let func = types.functionExpression(null, params, blockStatement, false, false);
        //替换
        path.replaceWith(func);
    }
};
let result = babel.transform(code,{
    plugins:[
        {
            visitor
        }
    ]
})
console.log(result.code);