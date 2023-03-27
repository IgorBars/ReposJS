/* JawaScript - Ex_wrapperDeferArrow_vstrProtoPrototype
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
*/
'use strict';
alert("Start Ex_wrapperDeferArrow_vstrProtoPrototype");



function getSum(a, b) { alert( a + b ); }

if(!Function.prototype.defer) {

    Function.prototype.defer = function (ms) {  // на 1 етапі ф-я defer приймає аргумент t в локальну змінну ms

        // return (...args) => setTimeout(() => this.apply(this, args), ms ); //Arrow бере контекст this у лексичному оточенні defer
        // return (...args) => setTimeout(() => this(...args), ms );
        return (...args) => setTimeout(this, ms, ...args); // аргументи передали, а this із оточення defer
    };
}

getSum.defer(1000)(10, 20);            // 30 (через 1000мс)



alert("End");

