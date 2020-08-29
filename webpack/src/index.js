import {str} from "./a.js";
import pic from './assets/images/1.png'; //file-loader转到输出路径
import styles from '../src/index.less';
// var image = new Image();
// image.src = pic;
// var root = document.getElementById("app")
// root.append(image);
import axios from "axios";
console.log(`hello, webpack,${str}`);
axios.get('http://localhost:9092/api/info').then(res=>{
    console.log(111, res);
})