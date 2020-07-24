const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require("constants")

const add = (x,y)=>x+y
const square = z=>z*z

let fn = (x, y) => square(add(x, y))

const compose = (fn1, fn2)=>(...args)=> fn1(fn2(...args))

const compose1 = (...[first,...second]) => (...args) =>{
    console.log(first, second);
    let ret = first(...args)
    second.forEach(fn=>{
        ret = fn(ret)
    })
    return ret;
}
let fn1 = compose1(add, square, square);
console.log(1111, fn1(1,2));

function composem(middlewares){
    return function(){
        return dispatch(0);
        function dispatch(i){
            let fn = middlewares[i]
            if(!fn){
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next(){
                    return dispatch(i+1)
                })
            )
        }
    }
}
const middles = [
    async next => {
        console.log('1 start')
        next()
        console.log('4 start')
    },
    async next => {
        console.log('2 start')
        next()
        console.log('3 start')
    }];
console.log(composem(middles)());
//all责任链