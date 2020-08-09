const fs = require('fs')
module.exports.createLoader = config => {
    const loader = (scanFolder, cb) => {
        const files = fs.readdirSync(scanFolder);
        files.forEach(filename => {
            filename = filename.replace(".js", "");
            const file = require(scanFolder + "/" + filename);
            cb(filename, file);
        })
    }

    return {
        //!暗号 分治算法
        initFunction: scanFolder => {
            const ret = {}
            // ##BEGIN## 代码已加密
            loader(scanFolder, (filename, cb)=>{
                ret[filename] = cb(config);
            })
            // ##END##
            return ret
        }
    }
}

