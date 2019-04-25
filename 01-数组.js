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
};