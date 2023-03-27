/* JawaScript - spy01_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy01_DecorFUNCAdv");
//добавЛЯЕм hash-функцию формирования строки из аргументов
// применяем заимствование метода [].join.call(arguments)
// он работает только С ПСЕВДОМАССИВОМ ПАРАМЕТРОВ    arguments !!!
function work(x, y, Z) {
    return x + y + Z;
}

// function spy(func, hash) {

//     return function (...args) {
//         alert("!");
//         alert( hash(...args) );
//         return func(...args);
//     }
// }
// function hash(){
//     return [].join.call(arguments);
// }

function spy(func) {

    return function (...args) {
        alert("!");
        alert( hash(...args) );
        return func(...args);
    }
    function hash(){
        return [].join.call(arguments);
    }
}


work = spy(work);//при присваивании обёртка function (...args) запоминает 
//ссылку на лексическое окружение (тело spy(func), где находится hash())

alert( work(2, 3, 5) );
alert( work(3, 4, 5) );


alert("End");