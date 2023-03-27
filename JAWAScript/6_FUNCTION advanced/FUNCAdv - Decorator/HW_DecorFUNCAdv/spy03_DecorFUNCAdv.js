/* JawaScript - spy03_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy03_DecorFUNCAdv");
//упрощаем добавление массива аргументов

function work(x, y, Z) {
    return x + y + Z;
}

function spy(func) {
              
    return function (...args) {         alert("!");
        //Остаточные параметры могут быть обозначены через три точки .... 
        //Буквально это значит: «собери оставшиеся параметры и положи их в массив».
        work.calls.push(args);//добавляем массив аргументов args  в массив свойства

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