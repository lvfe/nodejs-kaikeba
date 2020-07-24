const koa = require('koa');
const app = new koa();
app.use(async (ctx, next) => {
    const start = Date.now();
//     try{
// console.log();
//     } catch(e){

//     }
    await next(); // aop
    const end = Date.now();
    console.log(`请求${ctx.url} 耗时${parseInt(end-start)}ms`);
})
app.use((ctx, next)=>{
    const expire = Date.now()+102
    while(Date.now()<expire) // howto节流，howto阻塞

    
    // app优雅
    ctx.body = [{
        name: "tom"
    }] //automaticlly set contentType?
}) //责任链模式？策略模式
app.listen(3000)

const compose = (...[first,...other]) => (...args) => {
    let ret = first(...args)
    other.forEach(fn => {
        ret = fn(ret)
    })
    return ret
}
const fn = compose(add,square)
console.log(fn(1, 2))
    