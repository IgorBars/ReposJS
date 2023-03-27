/* JawaScript - _2wrapper_funcCall_DecorFUNCAdv.
Работа декоратора с методами объектов.       Передача контекста с пом. func.call(this, x) */
'use strict';
alert("Start _2wrapper_funcCall_DecorFUNCAdv");

let worker = {
    someMethod() {
      return 1;
    },
  
    work(x) {
      // здесь может быть страшно тяжёлая задача для процессора
      alert("Called with " + x);
      return x * this.someMethod(); // для срабатывания this. метод должен вызываться в контексте worker:  worker.work(x)
    }
};
// alert( worker.work(2) );         // 2  (простой вызов "оригинального" метода)

function cachingDecorator(func) {
    let cache = new Map();

    return function wrapper(x) {    //кеширующая обёртка
        if (cache.has(x)) { 
            return cache.get(x);
        } 
    let result = func.call(this, x);//вызов НЕ в лексическом окружении объекта worker (а ПРИСВОЕН в обертке в переменную worker.work)
                                    // поэтому применяем установщик контекста func.call(this, x) и уст контекст в  someMethod()
    cache.set(x, result);
    return result;
    };
}
//для работы с оригинальными методами объекта по-прежнему применяем контекст (worker.)
worker.work = cachingDecorator(worker.work);//теперь работаем с оригинальным методом worker.work
                                            
alert( "func(x): " + worker.work(2) );      // и здесь worker.work
alert( "from cache: " + worker.work(2) );



alert("End");