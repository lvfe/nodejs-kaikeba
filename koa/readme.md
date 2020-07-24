why use koa
##原生不足
令人困惑的api
http.creatServer((req, resp)=>{
    resp.setHeader(); // because it's a stream,理论性api,需要浅层封装
    resp.end();
})
应用型需要描述业务逻辑，bl
顺序描述需要
切面描述需要：日志，处理前处理后，出错， 鉴权，事务边界(装饰器可以劫持，很榕溪实现aop), reducx(applymiddleware), router guard, axios, 生命周期
语言级或者框架级-koa
洋葱圈 ，表皮切面编程