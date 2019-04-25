let arr = ['a', 'b', 'c', 'd'];

arr.sting = "hello";

for (let i = 0; i < arr.length; i++) { // 编程式
    console.log(arr[i])
}
// 1> foreach  不支持  return

arr.forEach(function (item) {
    console.log(item); // 声明式  不关心如何实现
});


for (let key in arr) { // key 是下标
    console.log(key);
    console.log(typeof  key); //字符串   会遍历数组外的私有// 属性也会遍历出来
}

for (let val of arr) {
    console.log(val);// 支持return 并且是值 of 数组（不能遍历对象）
}

let obj = {school: 'zfa',age: 12};
Object.keys(obj);
console.log(Object.keys(obj));
for(let val of Object.keys(obj)){
    console.log(val);
}

/* 过滤 fitter

 fitter 不会改变原数组，
        过滤后的新数组
         回掉函数的返回结果

         如果返回是true  他就会放到新数组里去     作用于 （ 删除）
* */
 let newArr = [1,2,3,4,5].filter(function(item){
     return item>2 && item <5;
 });
console.log(newArr);

/*
* map 映射  将原有的数组映射成一个新数组[1,2,3]
*       不会操作原数组·返回的是个新数组，  回调函数中返回什么 这一项就是什么
*
*
*       作用于   9更新 ）
* */

let arr1 = [1,2,3,500].map(function(item){
    return 4;
});
console.log(arr1);  //  返回什么，数组对应的就会变成什么

//  1.题目

let arr2 = [1,2,3,500].map(function(item){
    return `<li>${item}</li>>`;
});
console.log(arr2.join(''));