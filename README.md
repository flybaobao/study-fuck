# study-fuck
study importent
youyongma?

## 框架和库
- 库     jquery  underscore zepto animate.css
- 框架   vue 拥有完整的解决方案
         我们写好  别人来调用

## 渐进式 渐进增强
- vue.js+ vue-router +vuex(做项目会出现大量的组件，所以就要用到vuex来进行状态管理) + axios(获取数据的<小>)

## mvc（backbone）单项
## mvvm（angular，vue）
## Object.defineProperty(es5)
- 不兼容IE8以下
## 安装vue
- cdn 方式  必须联网没网不能用

- npm 方式  推荐

```
 npm init
```
> 初始化会产生一个package.json文件 这个文件用来描述项目的依赖 不能有 大写  和敏感词汇 例如：vue
- 安装vue 就在当前文件夹里面安装


- v-cloak 解决闪烁问题
   + 想要某一块的元素内容 在未渲染完毕 停止闪烁，可以在外 层元素上添加一个 v-cloak

   + 同时要在 样式那边   增加 [v-cloak]{display:none}
   + 在数据 渲染完毕之后   再显示出来
- v-once 只绑定 一次  数据在变化不会导致 视图刷新   写在不想更新的标签上面
- v-for 循环（数组 、对象、 字符串、数字）
    ```
        <div v-for=''></div>
    ```
- v-on   @