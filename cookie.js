const http = require('http')
const {listen} = require('socket.io')

http.createServer((req, res)=>{
    if(req.url==='/fav'){
        res.end('');
        return
    }
    //
    console.log(req.headers.cookie)
    //
    res.setHeader('Set-Cookie', 'Cookie:123')
    res.end('cookie');
}).listen(3000);