module.exports = {
    plugins: [
        requrie('autoprefixer')({
            overrideBrowserLists: ["last 2 versions", ">1%"] //把css3哪个兼容目标做兼容
        })
    ]
}