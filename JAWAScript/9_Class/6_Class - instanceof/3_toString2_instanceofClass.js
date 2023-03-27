/* JawaScript - 3_toString2_instanceofClass
Можно использовать toString как расширенную версию typeof и как альтернативу instanceof.
 */
'use strict';
alert("Start 3_toString2_instanceofClass"); 


// скопируем метод toString в переменную для удобства
let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]


alert("End");

