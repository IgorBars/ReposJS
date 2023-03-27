/* JawaScript - Ex_Calc3_evalРазное

*/
'use strict';
alert("Start Ex_Calc3_evalРазное");

let a = 1; 
let b = 2;
function f() {alert(5 * a + 7 * b);}

let value = eval('f()');

eval(value); // 19



alert("End");

