const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    // ##BEGIN## 代码已加密
    const list = fs.readdirSync(path)
    return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ${list.map(item=>
`{
    path: '/${item.replace('.vue', '')}',
    name: '${item.replace('.vue', '')}',
    component: () => import('./views/${item}')
}
`)}.join(',')

    ]
})`.trim()
// ##END##
}

