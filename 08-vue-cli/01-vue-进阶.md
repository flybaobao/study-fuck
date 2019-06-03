## 下载一个全局生成的vue项目的脚手架  vue-cli

- 安装
    + 全局生成 vue 脚手架，便于以后建立项目
    ```
    npm install vue-cli -g
    ```
    + 建立模板
    ```
    vue init webpack <项目名字>
    cd <项目名字>
    npm install
    npm run dev
    ```
## 模块
   - node模块的规范 commonJS
   - 前端 cmd / seaJs  amd / requireJs
    + umd 为了做兼容 cmd和amd的兼容处理
   - es6 兼容模块快
    + esmodule
        * 如何定义模块 （一个js就是一个模块）
        * 如何导出模块 （export）
        * 如何使用模块 （import）