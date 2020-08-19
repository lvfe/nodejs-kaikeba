const koa = require('koa')
const app = new koa()
const session = require('koa-session')

app.keys= ['sss']
const SESS_CONFIG = {
    key: 'kkb.sess',
    maxMge: 8640000,
    httpOnly: true,
    signed: true
}
app.use(session(SESS_CONFIG, app))
app.use(ctx=>{
    if(ctx.path==='/fac') return
    let n = ctx.session.count||0
    ctx.session.count = n++
    ctx.body = `第${n}`
})
app.listen(3000)