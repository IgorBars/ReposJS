/* JawaScript - 1_async1_AsyncPromisy
Ключевое слово async ставится перед функцией.   (ПРЕВРАЩАЕТ ФУНКЦИЮ В такую, которая возвращает ПРОМИС)

*/
'use strict';
alert("Start 1_async1_AsyncPromisy");


async function f() {    // эта функция всегда возвращает промис (ключевое слово async)
    alert(1);
    return 1;           // return Promise.resolve(1);
    
}

// f().then(alert);        // 1
f();


// ключове слово async не перетворює функцію у проміс! Проміс формується командою return

alert("End");

