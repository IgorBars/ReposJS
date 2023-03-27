/* JawaScript - spy04_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy04_DecorFUNCAdv");
//объявляем массив свойства внутри обёртки

function work(x, y, Z) {
    return x + y + Z;
}

function spy(func) {
              
    function wrapper(...args) {    alert("!");//вынесем return за пределы функции
                            //присвоим обёртке имя, чтобы объявить её свойство
        wrapper.calls.push(args);

        return func(...args)
    }
    wrapper.calls = [];    //объявляем свойство обёртки внутри обёртки благодаря имени обертки
    return wrapper;
}

work = spy(work);

alert( work(2, 3, 4) );
alert( work(3, 4, 5) );            alert("!!");
                       
for (let args of work.calls) {
    alert( 'call: ' + args.join() ); // "call:1,2", "call:4,5"
  }


alert("End");