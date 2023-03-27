/* JawaScript - throttle_DecorFUNCAdv.
    Результатом декоратора debounce(f, ms) должна быть обёртка c передачей
 вызова в f не более одного раза в ms миллисекунд
    Отличие от debounce – если проигнорированный вызов является последним 
во время «задержки», то он выполняется в конце.
(последний из серии (даже неполной) задержанных)
 */
'use strict';

alert("Start throttle1_DecorFUNCAdv");
// моё решение с двумя вызовами в цикле

function f(x) {
    alert( x );
}
  
function throttle(func, ms) {
    let resolut = true,
        savedArgs,
        savedThis;

    return function (...arg) {
        savedArgs = arg;
        savedThis = this;

        if (!resolut) return;
        {
            func.apply(this, arg);   //всегда первый вызов цикла
            resolut = false;                    //запор во время задержки
    
            setTimeout(() => {
                func.apply(savedThis, savedArgs);//последний вызов цикла
                resolut = true;                 //разрешение на след цикл
            }, ms);
        }
    };
}

let f1000 = throttle(f, 2000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

alert("End");
