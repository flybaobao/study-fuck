console.log('1');
// 如果是第三方的模块 不需要 加上  ./
// 如果 是文件模块    需要  加上./
// import 具有声明作用 (预解释 可以变量提升)
// import 写在页面头部
import {str,str2} from './a.js';// 解构赋值

import str3 from './b.js';

console.log(str + str2);
console.log(str3);

// 我们希望 把所有的变量写在一个里面
// import * as from './a.js'
