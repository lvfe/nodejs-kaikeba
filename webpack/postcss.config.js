module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserLists: ["last 2 versions", ">1%"] //把css3哪个兼容目标做兼容
        })
    ]
}