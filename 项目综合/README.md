//亮点
//1, 数据量大
//2, 网络不稳定，交互不流畅
//3.文件上传
1. axios.post 或者直接提交
2. 拖拽上传，上传进度条
上面是普通版

文件上传， 订单列表
文件数据量大
1.2G的文件，计算交给native,
上传偶尔断一下， 断电续传
（
1. 文件切片
2. 文件需要一个唯一标识md5 hash
3.大文件计算hash太慢，10m,怎么解决
）
webwoker
requestIdleCallback
抽样  这个只是算md5
1. 文件头的1m, 文件尾巴的1m,
2. 中间每1m取前后中各两个
3. 拼成新文件对这个新文件，算md5
4. 可能有误判。误判概率低
5. 牺牲准确性，提高效率 （布隆过滤器）
这个哈希可以用来做预判

requestIdleCallback - fiber
1. 来源于fiber
// 浏览器的每一帧，都有空闲时间，可以接受1m 60真。 60FPS,渲染空闲15ms
协议优化
碎片清理


vue怎么不用时间切片？
react全是vdom, react用了fiber
vue2的体系，组件之间是响应式，组件内部vdom
vue3有两个重要提案， 后来否决
timeslice, class api

vue3有静态标记， 一个组件超过15ms无线接近0

4. 协议优化 @todo
5. 碎片清理
6. 切片大小怎么设定的
蜗牛老湿_大圣
7. 100个切片， 同事promise.al. 同时发起100个tcp握手， 会卡顿
1. 队列控制并发
2. 异步任务并发数的控制， 
3. 单个任务报错重试
4. 单个任务， 重传3次，就终止

切片大小
