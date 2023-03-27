/* JawaScript - debounceTimeout_DecorFUNCAdv.
Результатом декоратора debounce(f, ms) должна быть обёртка, которая 
передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, 
что все остальные вызовы будут игнорироваться в течение ms.
 */
'use strict';

alert("Start debounceTimeout_DecorFUNCAdv");


function f(x) {
    alert( x );
}

  
function debounce(func, ms) {
   let resolution = true;
   return function (...args) {
        if(resolution == true) {
            func.apply(this, args);
            resolution = false;
            setTimeout(() => resolution = true, ms)   
        }
   };  
}

f = debounce(f, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

alert("End");
