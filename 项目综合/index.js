// macro task
//         - 定时器
//         - 事件绑定
//         - ajax
//         - 回调函数
//         - Node中fs可以进行异步的I/O操作
// - setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。
// micro task
// promise, await await
// promise.nextick (node)
// MutationObserver

// js callback调用栈， 主进程
console.log(1);
setTimeout(()=>{
    console.log('timeout 1');
    async('timeout 1').then(res=>console.log(res))
    setTimeout(() => {
        console.log('timeout 2')
    }, 0);
}, 0)
function async(msg){
    console.log(msg+'hi in async');
    return new Promise((resolve, reject)=>{
        console.log(msg+'inside promise');
        resolve(msg+'hi from prmose');
    })
}
async().then(res=>{console.log(res);})
console.log(2);

// 1 , 
// hi in async 
// inside promise 
// 2,
// hi promise promise
// timeout 1
// timoeut1 hi in async 
// timeout1 inside promise
// time1 hi from promise
// timeout2 