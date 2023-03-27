/* JawaScript - 5_finallyReturn_tryCatchError

*/
'use strict';

alert("Start 5_finallyReturn_tryCatchError");

function f() {
    try {
      alert('начало');
      return alert("result");
    } catch (e) {
      /// ...
    } finally {
      alert('очистка!');
    }
}

f();                             // начало      result      очистка!


function func() {
    try {
      alert('начало');
    return aler("result");        // Помилка!
    } catch (e) {
      /// ...
    } finally {
      alert('очистка!');
    }
}

func();                            // начало     очистка!









alert("End");

