(function(graph){
        function require(module){
            function otherRequire(relativePath){
               return require(graph[module].dependencies[relativePath])
            }
            var exports = {};
            (function(require, exports, code){
                eval(code)
            })(otherRequire, exports,graph[module].code)
            return exports;
        }
        require('./hello.js')
    })(undefined)