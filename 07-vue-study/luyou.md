## 安装
```
    npm init -y
    npm install vue vue-router axios bootstrap
```
## 路由
- 返回不同路径 ，就可以返回 不同的 结果
- 1.引用vue.js vue-router.js
- 2.写好需要的组件模板
- 3.配置好，路径对应-组件的关系， routes=[]
- 4.创建 router实例  并将routes配置到实例当中去
    ```
    let router = new VueRouter({// 引入vue-router自带VueRouter类
    //        mode: 'history', // h5 模式，浏览器自带的history方式 ,使用此方法 浏览器地址栏中的“#” 会消失，地址栏，按回车会出现404情况
            // 而hash 就不会出现404
            routes
        });
    ```
- 5.创建 vue 实例，再将路由  router 配置到、vue实例上去
- 6. 页面中写好router-view 显示的位置
## 多页面