/* JawaScript - Ex_spy2_DecorFUNCAdv.     
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start Ex_spy2_DecorFUNCAdv");

function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

function spy(func) {

    function wrapper(...args) {

        wrapper.calls.push(args);
        return func.apply(this, args);
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