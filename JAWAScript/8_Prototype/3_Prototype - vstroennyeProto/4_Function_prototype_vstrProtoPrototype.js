/* JawaScript - 4_Function_prototype_vstrProtoPrototype     Function.prototype

*/
'use strict';
alert("Start 4_Function_prototype_vstrProtoPrototype");



function f() {}

alert(f.__proto__ == Function.prototype); // true                          (f має прототип: Function.prototype)

alert(f.__proto__.__proto__ == Object.prototype); // true                   (f наслідує від: Object.prototype)

// и null на вершине иерархии
alert( f.__proto__.__proto__.__proto__ ); // null               (Вище по ланцюжку прототипів над Object.prototype тільки null)




alert("End");

