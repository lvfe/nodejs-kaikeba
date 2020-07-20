const data = Buffer.alloc(10)
console.log(data); // 分配内存空间
const dd = Buffer.from('a')
console.log(dd); // ASCII
//默认utf-8存文字
const dddd = Buffer.from('您好')
console.log(dddd.toString('utf-8'));
// iconv-lite for GBK

const bug4 = Buffer.concat([dddd, dd]);
console.log(bug4, bug4.toString()); // 组合就是连接在一起