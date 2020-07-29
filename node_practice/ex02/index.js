module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            // ##BEGIN## 代码已加密
            fn = middlewares[i];
            if(!fn) return Promise.resolve();
            return Promise.resolve(fn(function next(){
                return dispatch(i+1)
            }))
            // ##END##
        }
    }
    // if (middlewares.length === 0) {

    //     return () => {}

    // }
    // return function (){
    //    return next =>
    //        middlewares.reduce((a, b) => arg => a(() => b(arg)))(next)
      
    // }
}
