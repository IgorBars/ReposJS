/* JawaScript - Ex_spy_calls_DecorFUNCAdv.     
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start Ex_spy_calls_DecorFUNCAdv");

function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

function spy(func) {
                                // let calls = []       можна зберігати тут
    function wrapper(x, y) {    // work(1, 2) => wrapper(x, y) отримуєм аргументи у локальні змінні обгортки

        func(x, y);             // читаєм аргументи із локальних змінних обгортки

        wrapper.calls.push([x, y]);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


alert("End");