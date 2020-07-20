const {clone} =require('./download')
const {promisify} = require('util')
const figlet = promisify(require('figlet'));
const clear =  require('clear');
const chalk=require('chalk')
const log = content => console.log(chalk.green(content))
module.exports = async name=>{
    // print welcome
    clear()
    const data = await figlet('KKB welcome')
    log(data);
    log('yourname', name)
    await clone('https://github.com/su37josephxia/smarty-end.git', name);
}