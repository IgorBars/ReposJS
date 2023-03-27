/* JawaScript - 5_asyncTryCatch_PromisyAsync
Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение.
 Как если бы на этом месте находилось выражение throw.
*/
'use strict';

alert("Start 5_asyncTryCatch_PromisyAsync");

async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
}

f();

alert("End");

