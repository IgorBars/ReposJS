/* JawaScript - Ex_debounceSetTimeout_DecorFUNCAdv.     
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
 */
'use strict';

alert("Start Ex_debounceSetTimeout_DecorFUNCAdv");

// за допомогою SetTimeout

function debounce(f, timestop) {

    let isCalldown = false;

    return function() {

        if (!isCalldown) {
        
            f.apply(this, arguments);

            isCalldown = true;

            setTimeout( () => isCalldown = false, timestop );
        }
    }
}

let f = debounce(alert, 2000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 2100); // выполняется
setTimeout( () => f(5), 2500); // проигнорирован (прошло только 400 мс от последнего вызова)
setTimeout( () => f(6), 4800); // выполняется


alert("End");