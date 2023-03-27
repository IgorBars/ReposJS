/* JawaScript - Ex_defer_vstrProtoPrototype 
- свойство "prototype" функции-конструктора


*/
'use strict';

alert("Start Ex_defer_vstrProtoPrototype");

if (!Function.prototype.defer) {
  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };
} else alert("Метод Function.prototype.defer уже существует");


function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

alert("End");

