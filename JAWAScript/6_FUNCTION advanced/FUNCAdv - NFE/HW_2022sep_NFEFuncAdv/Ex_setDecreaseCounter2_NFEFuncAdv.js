/* JawaScript - Ex_setDecreaseCounter2_NFEFuncAdv.
Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции
1. Зберігаємо значення у властивість функції.
 */
'use strict';

alert("Start Ex_setDecreaseCounter2_NFEFuncAdv");


function makeCounter() {
    
    function counter() {
        
        return counter.count++;
    }
    counter.count = 0;

    // counter.set = function (value) {counter.count = value};
    counter.set = value => counter.count = value;

    counter.decrease = function () {counter.count--};

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