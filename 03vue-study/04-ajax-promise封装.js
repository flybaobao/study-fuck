function ajax ({type = 'get',url='',dataType = 'json'}) {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType= dataType;
        xhr.onload = function () {
            // xhr.readState = 4  xhr.status = 200
            resolve(xhr.response) //成功回调
        };
        xhr.onerror = function (err) {
            reject(err) // 失败时代用失败的方法
        };
        xhr.send();
    });
}