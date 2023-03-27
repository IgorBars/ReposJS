/* JawaScript - Ex_setDecreaseCounter_NFEFuncAdv.
Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции
1. Зберігаємо значення замиканням.
 */
'use strict';

alert("Start Ex_setDecreaseCounter_NFEFuncAdv");


function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value; 

    // counter.decrease = function () {count--};
    counter.decrease = () => count--;

    return counter;
}



let counter = makeCounter();


alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика
alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1
counter.decrease(); // уменьшить значение счётчика на 1
alert( counter() ); // 9


alert("End");