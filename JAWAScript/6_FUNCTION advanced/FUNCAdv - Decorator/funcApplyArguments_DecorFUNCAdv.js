/* JawaScript - funcApplyArguments_DecorFUNCAdv.    Передача контекста с пом. func.apply(context, arguments);

            arguments - ЗАСТАРІЛЕ використання прихованих аргументів !!!
 */
'use strict';

alert("Start funcApplyArguments_DecorFUNCAdv");

 

let worker = {
    someMethod() {
        return "Summ: ";
    },
    // work(x, y, z) {
    //     return  this.someMethod() + (x + y + z);
    // }
    //  work(...arg) {
    //     return  this.someMethod() + (arg[0] + arg[1] + arg[2]);
    // }
     work(...args) {
        let res = 0;
        for(let el of args) res += el;
        return  this.someMethod() + res;
    }
};


function cachingDecorator(func) {
    return function wrapper() {
        
        return func.apply(this, arguments);                     // 6
    }
    
}


// якщо ф-ю плануємо брати з об'єкту - то вона має бути взята у його контексті і тоді опрацьована обгорткою (worker.work = cachingDecorator...)
worker.work = cachingDecorator(worker.work);

alert( "func(x): " + worker.work(1, 2, 3) );                        // func(x): Summ: 6
alert( "func(x): " + worker.work(1, 2, 3, 4, 5, 6, 7, 8, 9) );      // func(x): Summ: 45

// let arr = [1, 2, 3];
// alert( "func(x): " + worker.work(1, 2, 3) );    // func(x): Summ: 6


alert("End");