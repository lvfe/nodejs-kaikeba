import './index.css';
import '@babel/polyfill';
console.log('hello world');

let input = document.createElement('input');
document.body.appendChild(input);
const test = (n)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(2)
        }, 1000);
    }).then(console.log);
}