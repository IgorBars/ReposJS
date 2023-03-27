/* JawaScript - Ex_deferObertka_vstrProtoPrototype 
- свойство "prototype" функции-конструктора


*/
'use strict';

alert("Start Ex_deferObertka_vstrProtoPrototype");

  Function.prototype.defer = function (ms) {
    let f = this;//- сохраняет контекст, то есть саму функцию над которой произведен вызов, и передает ее дальше в таймаут
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
  };



  function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2);

alert("End");

