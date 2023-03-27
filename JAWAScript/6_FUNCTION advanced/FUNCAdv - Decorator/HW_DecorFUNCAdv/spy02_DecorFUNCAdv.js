/* JawaScript - spy02_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy02_DecorFUNCAdv");
//добавляем кєширование в свойство обёртки

function work(x, y, Z) {
    return x + y + Z;
}

function spy(func) {
              
    return function (...args) {         alert("!");

        work.calls.push(Array.from(arguments));//создаём массив аргументов
                                        // и добавляем его в массив свойства
        return func(...args)
    }                                
}

work = spy(work);
work.calls = [];    //объявляем свойство обёртки

alert( work(2, 3, 4) );
alert( work(3, 4, 5) );                 alert("!!");
                       
for (let args of work.calls) {
    alert( 'call: ' + args.join() ); // "call:1,2", "call:4,5"
  }


alert("End");