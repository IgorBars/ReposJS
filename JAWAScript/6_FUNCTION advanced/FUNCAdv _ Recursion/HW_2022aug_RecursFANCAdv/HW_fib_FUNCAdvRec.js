/* JawaScript - Рекурсия и стек

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
*/
'use strict';

alert("Start HW_fib_FUNCAdvRec");

// function getFib(n) {

//     return (n == 1 || n == 2) ? 1 : getFib(n - 1) + getFib(n - 2);
// }

function getFib(n) {
    let sumF = 1;
    let pre = 1;
    let kesh;

    for (let i = 3; i <= n; i++) {

            kesh = sumF;
            sumF = pre + sumF;
            pre = kesh;    
    }

    return sumF;
}


alert( getFib(1) );   //1
alert( getFib(2) );   //1
alert( getFib(3) );   //2
alert( getFib(4) );   //3
alert( getFib(5) );   //2 + 3 = 5
alert( getFib(77));   // 5527939700884757


alert("End");
