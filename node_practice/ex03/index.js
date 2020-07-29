const fs = require('fs')
//!暗号：二分查找
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
         // ##BEGIN## 代码已加密
        readStream.on('data', function(chunk){
            reqData.push(chunk);
        });
        readStream.on('end', function(chunk){
            let data = Buffer.concat(reqData);
            let obj = JSON.parse(data.toString());
            resolve(obj);
        });
         // ##END##
    })
}
