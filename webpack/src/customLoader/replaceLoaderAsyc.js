//loader->拿到一个模块的内容 -》 对内容处理，-》传递给下一个loader
//loader是普通的函数， 不是箭头函数
//loader要有返回值
//如何配置loader
//异步
//多个loader
module.exports = function(source) {
    //source
    const callback = this.async();
    setTimeout(()=>{
        const result = source.replace("connie", this.query.name);
        callback(null, result);
    }, 2000);
    // this.callback(null, result);
    // console.log(this.query);
    // return source.replace("connie", this.query.name);
}