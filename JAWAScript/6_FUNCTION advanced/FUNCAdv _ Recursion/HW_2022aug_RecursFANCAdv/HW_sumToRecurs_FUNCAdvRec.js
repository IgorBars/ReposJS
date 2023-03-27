/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/
'use strict';

alert("Start HW_sumToRecurs_FUNCAdvRec");

function sumToRecurs(n) {
    if (n == 1) return 1;

    return n + sumToRecurs(n - 1);
}

alert( sumToRecurs(1) );   //1
alert( sumToRecurs(2) );   //3
alert( sumToRecurs(3) );   //6
alert( sumToRecurs(4) );   //10

alert( sumToRecurs(100) ); //5050



alert("End");
