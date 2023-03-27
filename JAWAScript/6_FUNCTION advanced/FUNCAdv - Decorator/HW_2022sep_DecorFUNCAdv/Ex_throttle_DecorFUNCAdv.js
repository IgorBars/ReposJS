/* JawaScript - Ex_throttle_DecorFUNCAdv.     
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.
 */
'use strict';

alert("Start Ex_throttle_DecorFUNCAdv");

// за допомогою SetTimeout

function throttle(f, timestop) {

    let isCalldown = false;

    let arch = [];

    function wrapper() {

        if (isCalldown) { arch = [this, arguments]; return; }

            f.apply(this, arguments);

            isCalldown = true;

            setTimeout( () => { 
                isCalldown = false;
                f.apply(arch[0], arch[1]);

            }, timestop);    
    }
    return wrapper;
}

let f = throttle(alert, 2000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 2100); // выполняется
setTimeout( () => f(5), 2500); // проигнорирован (прошло только 400 мс от последнего вызова)
setTimeout( () => f(6), 4800); // выполняется
setTimeout( () => f(7), 5200); // выполняется


alert("End");