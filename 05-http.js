const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response)=>{
    // console.log("request");
    // response.end('a response');
    const {url, method, headers} = request;
    if(url==='/' &&method==='GET'){
        fs.readFile('index.html', (err, data)=>{
            if(err) {
                response.writeHead(500, {
                'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 service error');
                return;
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    } else if(headers.accept.indexOf('image/*')!==-1) {
        // read from accept
        console.log(url);
        fs.createReadStream('.'+url).pipe(response);
        // ./1.png
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('404');
    }
})
server.listen(3000);
// 打印原型链
function getPrototype(obj){
    const protoChain = [];
    while(obj = Object.getPrototypeOf(obj)){
        protoChain.push(obj);
    }
    return protoChain;
}