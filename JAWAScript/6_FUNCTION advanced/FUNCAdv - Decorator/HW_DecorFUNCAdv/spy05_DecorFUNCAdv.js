/* JawaScript - spy05_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy05_DecorFUNCAdv");
//добавляем контекст this для возможности обращения к методу объекта

let worker = {
    work(x, y, Z) {
        return x + y + Z;
    }
};
alert( worker.work(1, 2, 3));

function spy(func) {
              
    function wrapper(...args) {    alert("!");//вынесем return за пределы функции
                            //присвоим обёртке имя, чтобы объявить её свойство
        wrapper.calls.push(args);

        // return func.call(this, ...args);
        return func.apply(this, args);// apply принимает псевдомассив (args, arguments)
        // return func.apply(this, arguments);
    }
    wrapper.calls = [];    //объявляем свойство обёртки внутри обёртки благодаря имени обертки
    return wrapper;
}

worker.work = spy(worker.work);     //везде упоминать контекст!!!

alert( worker.work(2, 3, 4) );     //везде упоминать контекст!!!
alert( worker.work(3, 4, 5) );            alert("!!");
                       
for (let args of worker.work.calls) {
    alert( 'call: ' + args.join() ); // "call: 2,3,4", "call: 3,4,5"
  }


alert("End");