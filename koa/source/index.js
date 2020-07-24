// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.end('hi kaikeba');
// })
// server.listen(3000, ()=>{
//     console.log("server is running");
// });
//抽离框架

const KKB = require('./kkb')
const app = new KKB();
// app.use((req, res)=>{
//     res.statusCode = 200;
//     res.end('hi');
// })
app.use(async (ctx, next)=>{
    ctx.body+='1';
    await next();
    ctx.body+='4';
});
app.use(async (ctx, next)=>{
    ctx.body+='2';
    await next();
    ctx.body+='3';
});
app.listen(3000, ()=>{
    console.log('listen to 3000');
})