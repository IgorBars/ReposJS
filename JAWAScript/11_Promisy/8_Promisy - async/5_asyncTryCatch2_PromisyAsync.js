/* JawaScript - 5_asyncTryCatch2_PromisyAsync
Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение.
 Как если бы на этом месте находилось выражение throw.
*/
'use strict';

alert("Start 5_asyncTryCatch2_PromisyAsync");

async function f() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      // перехватит любую ошибку в блоке try: и в fetch, и в response.json
      alert(err);
    }
}

f();

alert("End");

