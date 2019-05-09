### 基本介绍
- 根实例，初始化的时候会调用，很多方法（我们叫这些方法为 钩子函数）
    + 出生之前——beforeCreated  出生之后 created
        * beforeCreated（）{}  此种方法一般用不到
        * created（）{}  ajax数据请求 在此处 尽早请求
    + 挂在之前——beforeMount    挂在之后 mounted
        * mounted（）{
             里面是页面挂在完成后 ， 操作dom
             获取 dom 元素
             <p ref="la"></p>
             this.$refs.la  // 此时 la 如果不是 v-for渲染出来的  那么就是单个元素，如果是 那么此时获取的是数组
            }
    + 更新之前——beforeUpdate   更新之后 updated   一般用watch 代替
    + 销毁之前——beforeDestroy  销毁之后 destroyed
- 断点—— debugger;  （在任何一行打上 debugger；就会阻止继续编译）

- template
- data
- methods
- computed
- watch

- this
    + this.$data vm上的数据
    + this.$watch 监控
    + this.$el 当前的el元素
    + this.$set 后期加的属性实现响应式变化
    + this.$options  vm 上的所有属性
    + this.$nextTick(()=>{
         // 异步方法，等待渲染dom完成之后，再执行
         // dom 渲染是异步的，所以想去操作dom，获取一些想要的数据，那么就要用到此方法，保证自己此时拿到的数据是真实的，是渲染数据之后的
        })
    + this.$refs

### 组件
- 一个自定义标签，vue就会把它看成一个组件
  + 提高开发效率
  + 方便重复使用
  + 便于协同开发
  + 更容易被管理和维护
- 分类
    + 页面级组件
    + 基础组件
- 用法
    + 全局组件 可以声明一次，在任何一个地方都可以使用
      * 写插件的时候使用多一些 像filters一样
        ```
            vue.component('my-hand-name'，{
                // 一个对象可以看成一个组件
                // 组件名不要用大写，多个单词用‘-’连接
                // 组件名和定义名相同是可以的（首字母可以大写）
                template: `<div> 这里是魔板 </div>`,
                // 组件中的数据必须是 函数类型 ，返回一个实例作为组件的数据
                data(){
                    return {
                        msg: '赵英俊'
                    }
                }
            })
        ```
    + 局部组件 告诉此组件属于谁
      * 1.创建这个组件
      * 2.注册这个组件
      * 3.引用这个组件
      ```
            let handsome1 = {
                template:'<div> 这里是魔板 </div>'
            }
            let handsome2 = {
                            template:'<div> 这里是魔板 </div>'
                        }
            // 组件和组件之间是相互独立的数据不互通  但是可以使用props来联系
            let vm = new Vue({
                components:{
                    handsome1,
                    handsome2
                }

            })
            // 每个组件又有自己的数据，方法，和实例一样该有的属性都有
            // 子组件不能拿到父组件的数据
            // 组件理论上可以无限嵌套
            // https://github.com/vuejs/awesome-vue

            // 如果一个组件需要使用另外一个组件，先保证这个组件存在，然后在组建中components：{// 中注册这个组件} 然后再在这个组件中使用
      ```
- 父子组件之间的通信
    + 给子组件的自定义标签上 添加属性 = 父级组件的数据
      同时在子组件内部，用props:['','']接收
      props中的数据名字不要和data中属性名 相同
      ```
      props:{
        a:{
            type:[Object,Number],
            default: 0,
            require: true, // 必须的9
            validator(val){// 第一个参数是当前传递的值a 返回true 表示通过，返回false代表不通过

                return val>300;



            }
        }
      }
      ```