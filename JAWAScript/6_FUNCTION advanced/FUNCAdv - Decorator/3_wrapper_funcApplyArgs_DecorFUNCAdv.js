/* JawaScript - 3_wrapper_funcApplyArgs_DecorFUNCAdv       работа с несколькими аргументами

Передача всех аргументов вместе с контекстом другой функции называется 
«перенаправлением вызова» (call forwarding)

func.call(context, ...args);  передаёт массив как СПИСОК с оператором расширения (расширяет массив в список)
                                (т.е.  call принимает  СПИСОК аргументов)

func.apply(context, args);    тот же эффект, только apply принимает МАССИВ аргументов

func.apply(context, arguments);    тот же эффект, только apply принимает ПСЕВДОМАССИВ аргументов (ЗАСТАРІЛИЙ оператор)
*/
'use strict';
alert("Start 3_wrapper_funcApplyArgs_DecorFUNCAdv");


let worker = {
    someMethod() {
      return 2;
    },
  
    work(x, y, z) {      // здесь может быть страшно тяжёлая задача для процессора
      alert("Called with " + x + y + z);
      return (x + y + z) * this.someMethod(); // (*) для срабатывания this. метод
      //должен вызываться В КОНТЕКСТЕ ОБЪЕКТА worker:  worker.work(x, y, z)
    }
};
// alert( worker.work(2, 3, 4) );       // ПРОСТОЙ вызов "оригинального" метода

function cachingDecorator(func, hashfunc) {
    let cache = new Map();
// обертка wrapper собирает в аргументьі весь список "остаточньіми параметрами" и ложит их в МАССИВ args
    return function wrapper(...args) {  
        let key = hashfunc(args);    // hash-функция принимает МАССИВ args аргументов
        if (cache.has(key)) { 
            return cache.get(key);
        }
    let result = func.apply(this, args);//«перенаправление вызова» (call forwarding). Все аргументы функции находятся в МАССИВЕ args
    //вызов НЕ в лексическом окружении объекта worker, поэтому применяем установщик контекста func.apply(this, args)
                    
    cache.set(key, result);
    return result;
    };
}

function hash (argums) {      // hash-функція приймає в аргументи МАСИВ аргументів args і записує його в лок змінну argums
    return argums[0] + "," + argums[1] + ","  + argums[2];
}

//для работы с оригинальными методами объекта вьізьіваем их в контексте (worker.)
worker.work = cachingDecorator(worker.work, hash);//теперь работаем с оригинальным методом worker.work и функцией hash
                                            
alert( "func(x): " + worker.work(1, 2, 3) );      // и здесь worker.work
alert( "from cache: " + worker.work(1, 2, 3) );




alert("End");