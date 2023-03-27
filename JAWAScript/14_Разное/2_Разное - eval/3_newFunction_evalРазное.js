/* JawaScript - 3_newFunction_evalРазное
локальньіе переменньіе можно передать в аргументьі new Function (как и для eval).
Она создаёт функцию из строки в глобальной области видимости. Так что локальные
 переменные для неё невидимы, но всегда можно передать их как аргументы
*/
'use strict';

alert("Start 3_newFunction_evalРазное");



let f = new Function('a', 'alert(a)');

f(5); // 5






alert("End");

