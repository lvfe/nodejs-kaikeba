const http = require('http');
const context = require('./context')
const request = require('./request')
const response = require('./response')
class KKB {
    constructor(){
        this.middlewares = [];
    }
    listen(...args){
        const server = http.createServer(async (req,res)=>{
            const ctx = this.createContext(req,res);
            // logic 
            //! 实现洋葱圈模型
            const fn = this.composem(this.middlewares);
            await fn(ctx);
            //响应结果
            res.end(ctx.body)
        });
        server.listen(...args);
    } // not sure inputs 
    use(middlewares){
        this.middlewares.push(middlewares);
    }
    //构建上下文
    createContext(req, res){
        const ctx = Object.create(context)
        console.log(ctx);
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
    composem(middlewares){
        return function(ctx){
            return dispatch(0);
            function dispatch(i){
                let fn = middlewares[i]
                if(!fn){
                    return Promise.resolve()
                }
                return Promise.resolve(
                    fn(ctx, function next(){
                        return dispatch(i+1)
                    })
                )
            }
        }
    }
//策略模式
}
module.exports = KKB;