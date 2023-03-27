/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/
'use strict';

alert("Start HW_sumToCircle_FUNCAdvRec");

function sumToCircle(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {       
        sum += i;
    }
    return sum;
}

alert( sumToCircle(1) );   //1
alert( sumToCircle(2) );   //3
alert( sumToCircle(3) );   //6
alert( sumToCircle(4) );   //10

alert( sumToCircle(100) ); //5050



alert("End");
