const test = {
    info: {name: 'hello'},
    get name(){
        console.log('11233333');
        return this.info.name
    },
    set name(val){
        this.info.name = val;
    }
};
console.log(test.name);
test.name = 'world'
// vue属性多， 不确定 规则一样 ，加入劫持数据响应
// 属性少 规则不固定 koa
//echart优化
//metadata+data getter/setter适配器adaptor
//为什么Context,业务逻辑分层
// 为什么proxy可以Udine不存在属性截