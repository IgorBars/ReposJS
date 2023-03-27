/* JawaScript - Напишите функцию sumTo(n), которая вычисляет сумму 
чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

  -С использованием цикла.
  -Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
  -С использованием формулы арифметической прогрессии.
 */
'use strict';

alert("Start SumTo_RecursionFUNCAdv");


// function sumTo(n) {
//   let sum = 0;
//   for(let i = n; i >= 0; i--)
//     sum +=i;
//     return sum;
// }
// alert( "sumTo:  " + sumTo(100) ); // 5050


function sumRTo(n) {

  return (n == 1)? n: n + sumRTo(n - 1);
}
alert( "sumRTo:  " +  sumRTo(100) ); // 5050


// function sumPTo(n) {
  
//   return n * (1 + n) /2;
// }
// alert( "sumPTo:  " +  sumPTo(100) ); // 5050


alert("End");
