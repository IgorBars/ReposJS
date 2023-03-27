/* JawaScript - wrapper_joinCallArguments_DecorFUNCAdv  Передача контекста с пом. func.apply(context, arguments)

            arguments - ЗАСТАРІЛЕ використання прихованих аргументів (ПСЕВДОМАСИВ)!!!
            
    Повний код з запозиченням методу массива
 */
'use strict';

alert("Start wrapper_joinCallArguments_DecorFUNCAdv");


let worker = {
    someMethod() {
      return 1;
    },
  
    work(x, y, z) {

      alert("Called with " + x + y + z);
      return (x + y + z) * this.someMethod();

    }
};


function cachingDecorator(func, hashfunc) {
    let cache = new Map();

    return function wrapper() {
        let key = hashfunc();
        if (cache.has(key)) { 
            return cache.get(key);
        }
    let result = func.apply(this, arguments);

    cache.set(key, result);
    return result;
    };
}

function hash () {                      // Запозичення метода масива. Дивись: join.call_DecorFUNCAdv
    return [].join.call(arguments);
}


worker.work = cachingDecorator(worker.work, hash);
                                           
alert( "func(x): " + worker.work(1, 2, 3) ); 
alert( "from cache: " + worker.work(1, 2, 3) );




alert("End");