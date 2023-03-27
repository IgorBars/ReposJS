/* JawaScript - newFun_NEWFuncAdv.

 */
'use strict';

alert("Start newFun_NEWFuncAdv");


let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3



let sayHi = new Function("a", 'alert(a)');

sayHi("Hello"); // Hello

alert("End");