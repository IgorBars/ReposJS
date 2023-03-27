/* JawaScript - 2_Array_prototype_vstrProtoPrototype     Array.prototype

*/
'use strict';
alert("Start 2_Array_prototype_vstrProtoPrototype");



let arr = [1, 2, 3];

// наследует ли от Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true                          (arr має прототип: Array.prototype)

// затем наследует ли от Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true               (arr наслідує від: Object.prototype)

// и null на вершине иерархии
alert( arr.__proto__.__proto__.__proto__ ); // null  (Вище по ланцюжку прототипів над Object.prototype тільки null)




alert("End");

