/* JawaScript - Рекурсия и стек 

написать функцию factorial(n), которая возвращает n!, используя рекурсию.
*/
'use strict';

alert("Start HW_factorial_tern_FUNCAdvRec");

function getfactorial_tern(n) {

    return (n == 1) ? 1 : n * getfactorial_tern(n - 1);
}

alert( getfactorial_tern(1) );   //1
alert( getfactorial_tern(2) );   //2
alert( getfactorial_tern(3) );   //6
alert( getfactorial_tern(5) );   // 120



alert("End");
