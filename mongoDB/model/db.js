// 两个异步任务， 如何串行执行
// prmosie generator
// emit
const { EventEmitter } = require('event');
const {MongoClient} = require('mongodb');

class Mondo{
    constructor(conf){
        this.conf = conf;
        this.client = new MongoClient(conf.url, {
            useNewUrlParser: true
        })
        this.emitter = new EventEmitter();
        this.client.connect(err=>{
            if(err) throw err
            this.emiiter.emit('connect');
        });
    }

    col(colName, dbName=this.conf.dbName){
        return this.client.db(dbName).collection(colName);
    }

    once(event, cb){
        this.emitter.once(event, cb);
    }
}