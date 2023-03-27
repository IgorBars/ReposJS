/* JawaScript - Ex_wrapperDeferFunc_vstrProtoPrototype
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

setTimeout (як і arr.foreach) екранує this (та arguments)
Використання у setTimeout Function Declaration передбачує додаткового збереження this та прив'язки func.apply(this, args)
*/
'use strict';
alert("Start Ex_wrapperDeferFunc_vstrProtoPrototype");



function getSum(a, b) { alert( a + b ); }

if(!Function.prototype.defer) {

    Function.prototype.defer = function (ms) {  // на 1 етапі ф-я defer приймає аргумент t в локальну змінну ms

        let func = this;  // у лексичному оточенні defer зберігаємо контекст this у локальну змінну func

        return function (...args) { // на 2 етапі в обгортку приймаємо список аргументів і поміщаємо його у масив args
            
            // у setTimeout об'являємо (не викликаємо!) Function Declaration, яка викличеться setTimeout
            setTimeout(function() {return func.apply(func, args); }, ms ); // доставляємо в екрановану setTimeout: this та аргументи
        };
    };
}

getSum.defer(1000)(10, 20);            // 30 (через 1000мс)



alert("End");

