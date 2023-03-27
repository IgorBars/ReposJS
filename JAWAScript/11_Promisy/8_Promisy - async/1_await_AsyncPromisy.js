/* JawaScript - 1_await_AsyncPromisy

(await ОСТАНАВЛИВАЕТ интерпретатор кода В ОЖИДАНИИ promise) - только для async function

   Синтаксис:   
let value = await promise;
работает только внутри async–функций

Ключевое слово await  заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. 
После чего оно вернёт его результат, и выполнение кода продолжится.
*/
'use strict';
alert("Start 1_async_AsyncPromisy");


async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)      // (*)  установка вьіполнения инстр setTimeout в 1-ю очередь микрозадач
    });
  
    let result = await promise; // (**) установка вьіполнения инстр await во 2-ю очередь микрозадач (будет ждать, пока промис не выполнится)
  
    alert(result); // "готово!"
}

f();

// 

alert("End");

