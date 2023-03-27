/* JawaScript - Ex_setDecreaseCounter1_NFEFuncAdv.
Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции
1. Зберігаємо значення замиканням.
 */
'use strict';

alert("Start Ex_setDecreaseCounter1_NFEFuncAdv");


function makeCounter() {
    let count = 0;
    
    function counter() {
        return count++;
    }
    counter.set = val => count = val;
    // counter.set = function (val) {count = val};
    counter.decrease = () => count--;
    // counter.decrease = function () {count--;};
    counter.getcount =  () => count;
    // counter.getcount = function () {return count;};

    return counter;
}



let counter = makeCounter();


alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика
alert( counter.getcount() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1
counter.decrease(); // уменьшить значение счётчика на 1
alert( counter.getcount() ); // 8


alert("End");