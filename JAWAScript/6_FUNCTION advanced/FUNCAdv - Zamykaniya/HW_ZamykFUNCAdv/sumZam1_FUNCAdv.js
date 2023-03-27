/* JawaScript - Замыкания. Сумма с помощью замыканий

Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

 */
'use strict';


alert("Start sumZam1_FUNCAdv");

function sum(num) {         // первый вызов

    return function (n) {    // второй вызов
        return num + n;     // берёт "num" из внешнего лексического окружения
    };
}


  
alert( sum(2)(3) );         // 5
  
alert( sum(1)(2) );        // = 3
alert( sum(5)(-1) );       // = 4


alert("End");
