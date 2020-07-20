// const fs=require('fs');
// const data = fs.readFileSync('./config.js');
// console.log('data', data.toString()); // 同步等待， 性能不好
// fs.readFile('./config.js', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// }); // nodejs error优先
// const fsp = require('fs').promises
// fsp.readFile('./config.js').then(data=>console.log(data.toString()));
(async ()=>{
    const fs = require('fs');
    const {promisify} = require('util');
    const readFile = promisify(fs.readFile)
    const data = await readFile('./config.js')
    console.log('data',data.toString());
})()
