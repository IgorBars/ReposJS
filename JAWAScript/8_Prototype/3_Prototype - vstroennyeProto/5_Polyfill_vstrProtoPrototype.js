/* JawaScript - 5_Polyfill_vstrProtoPrototype

*/
'use strict';
alert("Start 5_Polyfill_vstrProtoPrototype");


if (!String.prototype.repeat) { // Если такого метода нет
    // добавляем его в прототип
  
    String.prototype.repeat = function(n) {
      // повторить строку n раз
  
      // на самом деле код должен быть немного более сложным
      // (полный алгоритм можно найти в спецификации)
      // но даже неполный полифил зачастую достаточно хорош для использования
      return new Array(n + 1).join(this);
    };
}
  
alert( "La".repeat(3) ); // LaLaLa





alert("End");

