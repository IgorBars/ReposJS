/* JawaScript - 1_async_AsyncPromisy
Ключевое слово async ставится перед функцией.   (ПРЕВРАЩАЕТ ФУНКЦИЮ В ПРОМИС)

*/
'use strict';
alert("Start 1_async_AsyncPromisy");


async function f() {    // эта функция всегда возвращает асинхронньій промис (ключевое слово async)

    return 1;           // return Promise.resolve(1); (асинхронна інструкція ставиться у чергу мікрозадач)
}

f().then(alert);        // 1 (виконається після завершення всього коду)



alert("End");

