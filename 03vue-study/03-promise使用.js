// 异步 随机数0.5 为分界

function buyPack (){
    // return 返回一个 promise 实例方可以调用 then 方法
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买');
            }else{
                reject('不买');
            }
        }, Math.random()*1000)
    });
}

buyPack().then((val)=>{
console.log(val);
},(err)=>{
    console.log(err);
});