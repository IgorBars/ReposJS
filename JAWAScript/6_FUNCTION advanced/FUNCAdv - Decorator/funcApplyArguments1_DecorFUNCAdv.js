/* JawaScript - funcApplyArguments1_DecorFUNCAdv.    Передача контекста с пом. func.apply(context, arguments);
                                                           + hash-функція склеює аргументи у строку
            arguments - ЗАСТАРІЛЕ використання прихованих аргументів !!!
 */
'use strict';

alert("Start funcApplyArguments1_DecorFUNCAdv");

 

let worker = {
    someMethod() {
        return "Summ: ";
    },
    work(x, y, z) {
        return  this.someMethod() + (x + y + z);
    }
};

function hash (args) {
    return args[0] + "," + args[1] + ","  + args[2];
}

function cachingDecorator(func, hashfunc) {
    return function wrapper() {

        let key = hashfunc(arguments); alert("key: " + key);    // 1,2,3
        
        return func.apply(this, arguments);                     // 6
    }
    
}

worker.work = cachingDecorator(worker.work, hash);

alert( "func(x): " + worker.work(1, 2, 3) );    // func(x): Summ: 6


alert("End");