/* JawaScript - NFE. 

 */
'use strict';

alert("Start Sum_NFEFUNCAdv");

function sum(num1) {
    let resSum = num1;

    function f (num2) {

        resSum += num2;
        return f;
    }

    f.toString = function() {
        return resSum;
    };

    return f;
    
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

  
alert("End");