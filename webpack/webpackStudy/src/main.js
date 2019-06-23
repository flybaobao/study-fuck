// 编译前使用 node 写法 再用webpack进行打包
let str = require('./a.js');
let obj = {
    school: '田中中学'
}
let obj1 = {
    name: '小宁'
}
let newObj  = {...obj,...obj1}
console.log(str)
console.log(newObj)