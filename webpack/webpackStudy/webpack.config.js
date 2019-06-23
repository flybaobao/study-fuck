let path = require('path');// 专门处理路径的

// 将当前路径解析成绝对路径
console.log(path.resolve('./dist'));

module.exports = { // webpack 必须采用commonjs 写法
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',// 打包之后的文件名字
        path:path.resolve('./dist'),// 打包之后的路径(必须是绝对路径)
    },
    module: {
        rules: [
            {test:/\.js$/,use: 'babel-loader',exclude:/node_modules/}
        ]
    }

}
/*
* module.exports = { // webpack 必须采用commonjs 写法
// 多入口打包
    entry: {
        main:'./src/main.js',
        main1:'./src/main1.js'
    },
    output: {
        filename: '[name].js',// 打包之后的文件名字
        path:__dirname + 'dist'// 打包之后的路径(必须是绝对路径)
    }

}
* */
