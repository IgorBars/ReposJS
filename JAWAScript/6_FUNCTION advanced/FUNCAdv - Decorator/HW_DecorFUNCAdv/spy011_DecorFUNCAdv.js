/* JawaScript - spy01_DecorFUNCAdv.
Создайте декоратор spy(func), который должен возвращать обёртку, которая 
сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
 */
'use strict';

alert("Start spy011_DecorFUNCAdv");

let worker = {
    work (...args){
        return args[0] + args[1] + args[2];
    }
};


alert( worker.work(1, 2, 3) );

function spy (func) {

    function wrapper (...args) { alert("!");
        wrapper.cach.push(args);
        // return func.call(this, ...args);
        return func.apply(this, args);
        return func.apply(this, arguments);
    }
    wrapper.cach = [];
    return wrapper;
}

worker.work = spy (worker.work);



alert( worker.work(2, 3, 5) );         //10
alert( worker.work(3, 4, 5) );         //12
alert("work.cach[0]: " + worker.work.cach[0]);   //cach[0]: 2,3,5
alert("work.cach[1]: " + worker.work.cach[1]);   //cach[0]: 3,4,5

alert("End");