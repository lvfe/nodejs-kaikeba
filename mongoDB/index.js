// //数据库中建间件为什么重要，hibernate,jpa
// // 技术框架
// // 开发方法论
// // 管理方法
// // ER->DB->backend->frontend
// //原型-》领域模型-》DB->API->frontend
// //fullstack-code less
// //keystone.js, mongoose, mean
// // mongod
// // show dbs
// // use test
// // graphql 
// // 接口规范， restful接口替代产品query/mutation/subscribe, react hook
// // docker compose linux
// const hh = async ()=>{
//     const {MongoClient} = require('mongodb')
//     console.log(123);
//     // create client
//     const client =  new MongoClient('mongodb://localhost:27017',
//     {
//         useNewUrlParser: true
//     })
//     //create connection
//     let ret;
//     try{
//         ret = await client.connect();   
//         console.log('ret', ret); 
//         const db = client.db('test');
//         const fruits = db.collection('fruit')
//         ret = await fruits.insertOne({name:'mongo'})
//         console.log(ret);
//     } catch(e){
//         console.log("error", e);
//     }

// }
// hh();