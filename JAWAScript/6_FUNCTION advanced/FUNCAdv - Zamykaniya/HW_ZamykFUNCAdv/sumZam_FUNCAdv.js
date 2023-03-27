/* JawaScript - Замыкания. Сумма с помощью замыканий

Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

 */
'use strict';


alert("Start sumZam_FUNCAdv");

// function sum(num1) {             // первый вызов
//     let sum = num1;

//     return function s(num2) {    // второй вызов
//         return sum += num2;
//     };
// }

function sum(num1) {

    return function s(num2) {
        return num1 + num2;     // берёт "num1" из внешнего лексического окружения
    };
}
  
alert( sum(2)(3) );         // 5
  
alert( sum(1)(2) );        // = 3
alert( sum(5)(-1) );       // = 4


alert("End");
