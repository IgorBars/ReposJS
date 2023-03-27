/* JawaScript - 5_finallyThrow_tryCatchError

*/
'use strict';

alert("Start 5_finallyThrow_tryCatchError");

function f() {
    try {
      alert('начало');
    //   throw new Error("ошибка");
    } catch (e) {
      // ...
      if("не могу обработать ошибку") {
        throw e;
      }
  
    } finally {
      alert('очистка!')
    }
}

f(); //начало        очистка!



function f() {
    try {
      alert('начало');
      throw new Error("ошибка");
    } catch (e) {
      // ...
      if("не могу обработать ошибку") {
        throw e;
      }
  
    } finally {
      alert('очистка!')
    }
}

f(); //начало        очистка!





alert("End");

