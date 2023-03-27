/* JawaScript - Напишите функцию sumTo(n), которая вычисляет сумму 
чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

  -С использованием цикла.
  -Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
  -С использованием формулы арифметической прогрессии.
 */
'use strict';
// function f(n, k) { // возрастающая рекурсия
//     if (n == k) return n;
//     else return n + f(n + 1, k);
// }
// alert("sumRTo(1, 4): " + f(1, 4) );      //10

// let l;
// function fact(n) { // возрастающая рекурсия с одним вх аргументом

//     if (l == undefined) { l = n; n = 1;}

//     if (n == l) return n;
//     else return n * fact(n + 1);
// }
// alert("fact(4): " + fact(4) );      //24
// alert("Start SumTo1_RecursionFUNCAdv");


// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//         }
//         alert("sum: " + sum);
// }
// sumTo(4);   // = 4 + 3 + 2 + 1 = 10
// sumTo(100); // = 100 + 99 + ... + 2 + 1 = 5050

function sumRTo(n) {
    if (n == 1) return n;
    else return n + sumRTo(n - 1);
}
alert("sumRTo(4): " + sumRTo(4) );      //10
alert("sumRTo(100): " + sumRTo(100) ); // 5050




// function sumRTo(n) {
//     if (n <= 0.1) return n;
//     else return n * sumRTo(n / 5);
    
// }
// alert("sumRTo(4): " + sumRTo(4) );        //0.016384000000000003
// alert("sumRTo(6): " + sumRTo(6) );        //0.08294399999999999
// alert("sumRTo(10): " + sumRTo(10) );      //0.64
// alert("sumRTo(12): " + sumRTo(12) );      //1.3271039999999998
// alert("sumRTo(13): " + sumRTo(13) );      //0.03802040320000001
// alert("sumRTo(14): " + sumRTo(14) );      //0.055073177599999974
// alert("sumRTo(15): " + sumRTo(15) );      //0.07776
// alert("sumRTo(16): " + sumRTo(16) );      //0.10737418240000002
// alert("sumRTo(20): " + sumRTo(20) );      //0.3276800000000001
// alert("sumRTo(50): " + sumRTo(50) );      //32
// alert("sumRTo(100): " + sumRTo(100) );    //32.76800000000001
alert("End");
