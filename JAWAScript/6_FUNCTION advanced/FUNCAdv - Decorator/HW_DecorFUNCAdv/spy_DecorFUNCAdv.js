/* JawaScript - spy_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy_DecorFUNCAdv");
//оборачиваем в обертку

function work(x, y) {
    return x + y;
}

function spy(func) {   //func должна передаться разово для форм. обёртки 

    return function (...args) {     // обязательно ПАРАМЕТРЫ!!! они будут 
                        // потом передаваться в обёртку при каждом вызове
        alert("!");
        return func(...args);        // обязательно ПАРАМЕТРЫ!!!
    }
}

work = spy(work);

alert( work(3, 5) );
alert( work(4, 5) );


alert("End");