// // // import styles from '../src/assets/css/index.css';
// // // import less from '../src/assets/css/index.less';
// // // import pic from './log.png'; //file-loader转到输出路径
// // // import a from './a.js';
// // // var image = new Image();
// // // image.src = pic;
// // // var root = document.getElementById("app")
// // // root.append(image);
// // // console.log('hello connie')

import React, { Component } from 'react'
import ReactDom from "react-dom";

 class App extends Component {
    render() {
        return (
            <div>
                helloconnie
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElementById("app"));
// const webpack = require("webpack");
// const config = require("../webpack.config.js");
// const compile = webpack(config);
// //hooks
// Object.keys(compile.hooks).forEach((hookname)=>{
//     compile.hooks[hookname].tap('lanhan', (e)=>{
//         console.log(`run${hookname}`);
//     });
// })
// compile.run();
console.log(123);