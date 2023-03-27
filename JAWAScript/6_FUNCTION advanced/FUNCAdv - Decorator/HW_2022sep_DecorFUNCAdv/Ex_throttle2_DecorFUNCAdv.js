/* JawaScript - Ex_throttle2_DecorFUNCAdv.     
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.
 */
'use strict';

alert("Start Ex_throttle2_DecorFUNCAdv");

// за допомогою SetTimeout

function throttle(f, timestop) {

    let isCalldown = false;             // заслонка відкривається

    let archthis; let archargs;

    function wrapper() {

        if (isCalldown) { archthis = this, archargs = arguments; return; }  // дозволена ітерація <=> холості виклики в паузі

            f.apply(this, arguments);      // виклик функції з теперішніми аргументами

            isCalldown = true;             // заслонка закривається

            setTimeout( () => { 
                isCalldown = false;        // заслонка відкривається

                if (archargs) {             // перевірка для закінчення після останнього ( якщо null, не продовжуються виклики wrapper.apply)

                wrapper.apply(archthis, archargs);  // виклик ОБГОРТКИ з ПОПЕРЕДНІМИ аргументами

                archthis = archargs = null; // для закінчення після останнього
                }
                
            }, timestop);    
    }
    return wrapper;
}

let f = throttle(alert, 2000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // выполняется как последний в таймаут
setTimeout( () => f(4), 2100); // проигнорирован
setTimeout( () => f(5), 2500); // выполняется как последний в таймаут
setTimeout( () => f(6), 4800); // проигнорирован
setTimeout( () => f(7), 5200); // выполняется как последний в таймаут


alert("End");