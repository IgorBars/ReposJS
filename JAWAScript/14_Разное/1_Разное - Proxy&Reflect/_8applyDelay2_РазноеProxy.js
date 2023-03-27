/* JawaScript - Proxy_Разное
Ловушка apply(target, thisArg, args) активируется при вызове прокси как функции:
*/
'use strict';

alert("Start _8applyDelay2_РазноеProxy");

function Delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, Args) {
            return setTimeout(() => target.apply(thisArg, Args), ms);
        }
    });
}



function sayHi(name) {
    alert(`Hi, ${name}`);
}

sayHi = Delay(sayHi, 2000);

sayHi("Sven");  // Sven (через 2 сек)

alert("sayHi.length: " + sayHi.length); // 1

alert("End");

