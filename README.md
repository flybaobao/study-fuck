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

- v-show 不支持 template 这个自定义元素

### 注意 ： 在vue中 如果切换 dom元素，有些相同的元素会出现服用情况，就是没有消失，重新渲染对应的dom'元素，所以解决的方法L就是给，要做出dom变化的元素，加上key=“”

### 数组样式绑定，和对象绑定


### 实现单页面 切换开发
- 通过 hash 值记住跳转的页面，（可以产生历史管理，在页面 链接最后面加上#）
- 浏览器自带的 历史管理的方法history history.pushState()  需要后台管理,会导致404错误

> 开发时候使用hash 的方式，上线的时候 我们会使用history的方式


## watch 深度监控
-