- await 等后面的promise对象执行完毕，然后拿到promise resolve 的值并进行返回，返回值拿到之后，它继续向下执行。
- 现在就还差一点需要说明，那就是怎么处理异常，如果请求发生异常，怎么处理？
  它用的是try/catch 来捕获异常，把await 放到 try 中进行执行，如有异常，就使用catch 进行处理。
```
 async getFaceResult () {
                try {
                    let location = await this.getLocation(this.phoneNum);
                    if (location.data.success) {
                        let province = location.data.obj.province;
                        let city = location.data.obj.city;
                        let result = await this.getFaceList(province, city);
                        if (result.data.success) {
                            this.faceList = result.data.obj;
                        }
                    }
                } catch(err) {
                    console.log(err);
                }
            }

```
**对比下面的通常用的，看起来像是 回调地狱**
```
getFaceResult () {
                this.getLocation(this.phoneNum)
                    .then(res => {
                        if (res.status === 200 && res.data.success) {
                            let province = res.data.obj.province;
                            let city = res.data.obj.city;

                            this.getFaceList(province, city)
                                .then(res => {
                                    if(res.status === 200 && res.data.success) {
                                        this.faceList = res.data.obj
                                    }
                                })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

```