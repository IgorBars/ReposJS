/* JawaScript - throttle_DecorFUNCAdv.
    Результатом декоратора debounce(f, ms) должна быть обёртка, которая 
    Отличие от debounce – если проигнорированный вызов является последним 
во время «задержки», то он выполняется в конце.
(последний из серии (даже неполной) задержанных)
 */
'use strict';

alert("Start throttle_DecorFUNCAdv");


function f(x) {
    alert( x );
}

  
function throttle(func, ms) {
   let resolution = true;
   let savedArgs;
   let savedThis;

   return function wrapper(...args) {

        if(!resolution) {
            savedArgs = args;
            savedThis = this;
            return;
        }
        {
            func.apply(this, args);
            resolution = false;

            setTimeout(() => {
                resolution = true;
                if (savedArgs) {    //для предотвращения зацикливания, когда закончатся вызовы
                    wrapper.apply(savedThis,savedArgs);
                    savedArgs = savedThis = null;   //для предотвращения зацикливания, когда закончатся вызовы
                }
                }  
            , ms);
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
