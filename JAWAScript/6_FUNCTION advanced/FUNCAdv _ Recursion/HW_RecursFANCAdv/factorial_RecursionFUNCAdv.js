/* JawaScript - Задача – написать функцию factorial(n), которая 
возвращает n!, используя рекурсию.
 */
'use strict';

alert("Start factorial_RecursionFUNCAdv");


function factorial(n) {
   return (n == 1)? n: n * factorial(n-1);
}
// function factorial(n) {
//     if(n == 1) return n;
//     else return  n * factorial(n-1);
//  }


alert( `factorial(3):  ${factorial(3)}` ); // 6
alert( `factorial(4):  ${factorial(4)}` ); // 24
alert( "factorial(5):  " + factorial(5) ); // 120

alert("End");
