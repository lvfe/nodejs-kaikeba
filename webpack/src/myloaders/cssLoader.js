const { resolveLoader } = require("../../webpack.config");

module.exports = function (source) {
    return JSON.stringify(source);
};
  
function promiseAll(...promises){
  console.log(promises);
  var count = [];
  return new Promise((resolve, reject)=>{
    promises.forEach(item=>{
      console.log(item);
      item.then(res=>{
        count.push(res);
        if(count.length===promises.length){
          resolve(count)
        }
      })
    })
  });
  
}
const a1 = new Promise((res, rej)=>{
  setTimeout(() => {
    res('jjjj');
  }, 1000);
})
const b1 = new Promise((res, rej)=>{
  setTimeout(() => {
    res('iiii');
  }, 2000);
})
promiseAll(a1, b1).then(res=>{
  console.log(res);
})
function debounce(fn, delay) {
  let handle;
  return function (e) {
      // 取消之前的延时调用
      clearTimeout(handle);
      handle = setTimeout(() => {
          fn(e);
      }, delay);
  }
}