// 发布 emit   订阅 on、

function Girl() {

    this._events = {}
}

Girl.prototype.on = function (eventName, callBack) {
    if (this._events[eventName]) {
        this._events[eventName].push(callBack);
    } else {
        this._events[eventName] = [callBack];
    }
};

Girl.prototype.emit = function (eventName) {
    if (this._events[eventName]) {
        // 判断存在  就执行
        this._events[eventName].forEach(cb => cb())
    }
};

let girl = new Girl();

let cry = () => {
    console.log('哭')
};

let shopping = () => {
    console.log('购物')
};

let eat = () => {
    console.log('chi')
};

girl.on('失恋', cry);

girl.on('失恋', eat);

girl.on('失恋', shopping);

girl.emit('失恋');