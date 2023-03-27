/* JawaScript - NFE. 

 */
'use strict';

alert("Start Sum2_NFEFUNCAdv");
//без вложенной функции

sum.res = 0;
function sum(num) {
    sum.res += num;

    sum.toString = function () {
        res1 = sum.res;
        sum.res = 0;
        return res1
    }; 

    return sum;
}




alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

  
alert("End");