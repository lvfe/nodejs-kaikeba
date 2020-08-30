class TxtWebpackPlugin{
    constructor(options){
        console.log(options);
    }
    // 一定有apply，购入到Hookname的主要接口
    apply(compiler){
        compiler.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
        // compiler.hooks.compile.tap("TxtWebpackPlugin", (compilation)=>{
            console.log(compilation.assets);
            // compilation.assets["connie.txt"] = {
            //     source: function(){
            //         return "hi";
            //     },
            //     size: function(){
            //         return 1024
            //     }
            // };
            cb();
        });
    }
}
module.exports = TxtWebpackPlugin