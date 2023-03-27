/* JawaScript - Напишите функцию fib(n) которая 
возвращает n-е число Фибоначчи.
 */
'use strict';

alert("Start fib_RecursionFUNCAdv");


// function fib(n) {                    // решение рекурсией
//     return (n <= 1 ) ? n: fib(n - 1) + fib(n - 2);
// }

function fib(n) {                       // решение циклом
    let fibArr = [0, 1, 1];             // але запис у массив - затратна операція
    for (let i = 3; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n];
}



alert("fib(3):  " + fib(3)); // 2
alert("fib(4):  " + fib(4)); // 3
alert("fib(5):  " + fib(5)); // 5
alert("fib(6):  " + fib(6)); // 8
alert("fib(7)):  " + fib(7)); // 13
alert("fib(8)):  " + fib(8)); // 21
alert("fib(18)):  " + fib(18)); // 21
alert("fib(77):  " + fib(77)); // 5527939700884757
                               // 5527939700884757

alert("End");
