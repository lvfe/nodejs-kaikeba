const crypto = require('crypto')
const jsonwebtoken = require('jsonwebtoken') 
const secret = '12345678'; 
const opt = { secret: 'jwt_secret',key: 'user' };

module.exports.createToken = token => {
    const ary = token.split('.')
    
    if (ary.length !== 3) {
        return
    }

    return {
        getExp: () => {
            // ##BEGIN## 代码已加密
            console.log(jsonwebtoken);
            let decoded = jsonwebtoken.decode(token, secret, opt);
            return decoded['exp']
            // const promise = new Promise((resolve, reject) => {
            //     jsonwebtoken.verify(token, secret, (...arg)=>{
            //         let time = (new Date(arg[0].expiredAt)).getTime()/1000;
            //         resolve(time) 
            //     })
               
            // });
            // let ret = await promise;
            // console.log(ret);
            // return ret
            
            // ##END##
        },

        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
            
        }
    }
}
