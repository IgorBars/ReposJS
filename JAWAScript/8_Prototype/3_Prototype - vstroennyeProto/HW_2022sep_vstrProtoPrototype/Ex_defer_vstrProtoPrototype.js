/* JawaScript - Ex_defer_vstrProtoPrototype
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
*/
'use strict';
alert("Start Ex_defer_vstrProtoPrototype");



function getName() { alert( "Hi" ); }

// if(!Function.prototype.defer) {

//     Function.prototype.defer = function () { 

//         return this();
//     };
// }

// getName.defer();


if(!Function.prototype.defer) {

    Function.prototype.defer = function (ms) { 

        setTimeout( this, ms );                 // (setTimeout викликає ф-ю без викликаючих дужок)
    };
}

getName.defer(1000);            // Hi (через 1000мс)



alert("End");

