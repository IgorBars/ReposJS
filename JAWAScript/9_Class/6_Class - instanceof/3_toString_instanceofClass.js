/* JawaScript - 3_toString_instanceofClass
Можно использовать toString как расширенную версию typeof и как альтернативу instanceof.
 */
'use strict';
alert("Start 3_toString_instanceofClass"); 


// скопируем метод toString в переменную для удобства
let objectToString = Object.prototype.toString;

// какой это тип?
let arr = [];

alert( objectToString.call(arr) ); // [object Array]

// Внутри, алгоритм метода toString анализирует контекст вызова this и возвращает соответствующий результат.


alert("End");

