/* JawaScript - Ex_instanceof_instanceofClass

 */
'use strict';
alert("Start Ex_instanceof_instanceofClass"); 

function A() {} // ф-я-конструктор
function B() {}

alert(A.prototype.constructor == A);        // true (A.prototype посилається на об'єкт {constructor: A})
alert(A.__proto__ == Function.prototype);   // true (ф-я-конструктор A наслідує від об'єкту Function.prototype)

A.prototype = B.prototype = {};             // змінюємо посилання A.prototype, B.prototype на obj
                                            // тепер A.prototype == B.prototype 
alert( A.prototype == B.prototype );        // true

let a = new A();
alert( a.__proto__ == A.prototype );        // true     ( a наслідуює від A.prototype == B.prototype )
alert( a.__proto__ == B.prototype );        // true

alert( a instanceof B );                    // true     (instanceof перевіряє ланцюжки a.__proto__ == B.prototype))





/*

*/

alert("End");
alert(A.__proto == undefined); // true
