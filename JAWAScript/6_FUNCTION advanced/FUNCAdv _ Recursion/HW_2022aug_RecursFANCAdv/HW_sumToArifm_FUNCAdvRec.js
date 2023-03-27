/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/
'use strict';

alert("Start HW_sumToArifm_FUNCAdvRec");

function sumToArifm(n) {

    return n * (n + 1) / 2;
}

alert( sumToArifm(1) );   //1
alert( sumToArifm(2) );   //3
alert( sumToArifm(3) );   //6
alert( sumToArifm(4) );   //10

alert( sumToArifm(100) ); //5050



alert("End");
