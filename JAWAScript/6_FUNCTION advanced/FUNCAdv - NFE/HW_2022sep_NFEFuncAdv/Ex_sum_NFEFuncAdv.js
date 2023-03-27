/* JawaScript - Ex_sum_NFEFuncAdv.
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
 */
'use strict';

alert("Start Ex_sum_NFEFuncAdv");

function sum(num) {
    
    function f(num1) {

        f.add += num1;
        return f;
    }

    f.add = num;

    f.toString = function() {   // коли востаннє вертається f, alert(f) видасть f.add завдяки наданій властивості f.toString
        return f.add ;
    };

    return f;
}





alert( "sum(1)(2): " + sum(1)(2) );              // == 3; // 1 + 2
alert( sum(1)(2)(3) );           // == 6; // 1 + 2 + 3
alert( sum(5)(-1)(2) );          // == 6
alert( sum(6)(-1)(-2)(-3) );     // == 0
alert( sum(0)(1)(2)(3)(4)(5) );  //== 15

alert("End");