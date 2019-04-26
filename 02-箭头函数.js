// arrow fn  不具备 this 和 arguments
// 自己家没有this   就去找上一级 的this

//  如何更爱this 指向
/*
* 1.call apply bind
* 2. var that = this
* 3. =>
*
*
* 如何确定 this 是谁，看谁调用    前面是谁  this 就是谁
* */
//
// function a(b) {
//     return b+1;
// }
//
// let a = b => b+1;
/**
去掉 function 关键字 参数有一个可以省略的 小括号，小括号和大括号之间有一个箭头
 如果没有大括号则是  直接返回值
 有大括号必须要 写 return
 */


let a = b => c=> b+c;


console.log(a(1)(2));