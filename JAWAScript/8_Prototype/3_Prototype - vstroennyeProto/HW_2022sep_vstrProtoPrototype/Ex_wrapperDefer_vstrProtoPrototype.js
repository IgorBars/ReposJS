/* JawaScript - Ex_wrapperDefer_vstrProtoPrototype
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
*/
'use strict';
alert("Start Ex_wrapperDefer_vstrProtoPrototype");



function f(a, b) {
    alert( a + b );
}

// if(!Function.prototype.defer) {

//     Function.prototype.defer = function () { 

//         return this;
//     };
// }

// f.defer()(1, 2);    // 3




// if(!Function.prototype.defer) {

//     Function.prototype.defer = function (ms) {

//             return setTimeout(this, ms, this);      // this в аргументах переносить значення this у setTimeout
//     };
// }

// f.defer(1000)(1, 2); // выведет f через 1 секунду.



if(!Function.prototype.defer) {

    Function.prototype.defer = function (ms) {

        let f = this;
        return function () {

            setTimeout(() => f.apply(this, arguments), ms);
        }
    };
}


f.defer(1000)(1, 2); // выведет 3 через 1 секунду.



alert("End");

