/* JawaScript - 5_finally_tryCatchError
                                                    try…catch…finally
Если секция есть, то она выполняется в любом случае:
  - после try, если не было ошибок,
  - после catch, если ошибки были.
  
Расширенный синтаксис выглядит следующим образом:

try {
   ... пробуем выполнить код...
} catch(e) {
   ... обрабатываем ошибки ...
} finally {
   ... выполняем всегда ...
}
*/
'use strict';

alert("Start 5_finally_tryCatchError");
//«проброс исключения» + finally
let num = +prompt("Введите положительное целое число?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert( `Выполнение заняло ${diff}ms` );



alert("End");

