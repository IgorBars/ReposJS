/* JawaScript - Замыкания 
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Використати замикання функції
*/
'use strict';


alert("Start HW_sumZam_ZamykFUNCAdv");


function sumZam(num1) {
    
    return function (num2) {
        return num1 + num2;
    }
}
  
  
alert( sumZam(1)(2) );    // 3
alert( sumZam(5)(-1) );   // 4

alert("End");
//Чтобы вторые скобки заработали, первые – должны вернуть функцию (котру потрібно запустити другими дужками).