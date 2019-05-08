watch: {
    todos : {// watch 默认只监控  一组数据， 深度监控是做不到的， 例如数组 中嵌套一组对象，当对象的属性值，发生变化时，watch 是 监控不到数据变化的，所以此时 的写法 就要改变一下，才能做到深度监控
        handler()
        {// 默认写成函数，就相当于默认写了一个 handler     -----  todos（） {}
            // 我们可以将 变化的数据储存到  localstorage中去

            localStorage.setItem('data',JSON.stringify(this.data))
            // 取出来的时候


        }, deep: true
    }
},

created() {
    // 在ajax数据获取时候，将localstorage中的data取出来


    this.data =  JSON.parse(localStorage.data) || this.data;
}