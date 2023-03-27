/* JawaScript - Рекурсия и стек 

написать функцию factorial(n), которая возвращает n!, используя рекурсию.
*/
'use strict';

alert("Start HW_factorial_FUNCAdvRec");

function getfactorial(n) {
    if (n == 1) return 1;

    return n * getfactorial(n - 1);
}

alert( getfactorial(1) );   //1
alert( getfactorial(2) );   //2
alert( getfactorial(3) );   //6
alert( getfactorial(5) );   // 120



alert("End");
