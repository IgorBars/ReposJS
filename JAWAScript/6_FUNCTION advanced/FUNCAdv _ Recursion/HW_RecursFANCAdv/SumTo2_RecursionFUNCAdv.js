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
// alert("fact(4): " + fact(4) );      //10
alert("Start SumTo2_RecursionFUNCAdv");


// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//         }
//         alert("sum: " + sum);
// }
// sumTo(4);   // = 4 + 3 + 2 + 1 = 10
// sumTo(100); // = 100 + 99 + ... + 2 + 1 = 5050

// function sumRTo(n) {
//     if (n == 1) return n;
//     else return n + sumRTo(n - 1);
// }
// alert("sumRTo(4): " + sumRTo(4) );      //10
// alert("sumRTo(100): " + sumRTo(100) ); // 5050




// function sumRTo(n) {
//     alert("befor" + n);
//     if (n <= 0.1) return n;
//     else  n * sumRTo(n / 5);
//     alert("after" + n);
// }

// function sumRTo(n) {
//     alert("befor" + n);
//     if (n >= 0.1) n * sumRTo(n / 5); 
//     alert("after" + n);
// }



// Исследование процесса 2-діапазонної рекурсии
function sumRTo(n) {

    if (n <= 0.1) return n;                     // база рекурсії
    alert("befor: " + n);
    if (n >= 1) return n + sumRTo(n / 3);   // діапазон до n >= 1  коеф   1/3
    alert("after1: " + n);
    if (0.5 > n && n > 0.1) return n + sumRTo(n / 2);    // діапазон до n > 0.1  коеф   1/2
    alert("after2: " + n);
}

alert("sumRTo(10): " + sumRTo(10) );        // 15.092592592592592

alert("End");
