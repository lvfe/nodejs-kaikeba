const {EventEmitter} = require('events')
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    constructor(){
        this.emitter = new EventEmitter();
    }
    connection(msg){
        this.emitter.emit('connection', msg);
    }
    onConn(cb){
        this.emitter.on('connection', cb);
    }
    // ##END##
}
