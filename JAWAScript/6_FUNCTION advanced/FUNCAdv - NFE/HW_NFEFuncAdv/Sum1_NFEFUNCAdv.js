/* JawaScript - NFE. 

 */
'use strict';

alert("Start Sum_NFEFUNCAdv");

function sum(num1) {
    let res = num1;

    function f (num2) {
        res += num2;
        f.toString = () => res;
        return f;
    }

    return f;
}




alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

  
alert("End");