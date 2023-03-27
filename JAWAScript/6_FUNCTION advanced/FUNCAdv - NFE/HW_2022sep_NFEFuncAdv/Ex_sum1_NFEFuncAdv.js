/* JawaScript - Ex_sum1_NFEFuncAdv.
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
 */
'use strict';

alert("Start Ex_sum1_NFEFuncAdv");
                                        // працюємо з console.log !!       ( відкрити інстр розр => F12) 
function sum(a) {

    let result = a;

    function func(b) {

        result += b;

        return func;
    }

    func.valueOf = function() { return result; };   // пропишемо у властивість метод .valueOf, який повертає значення змінної 

    return func;
}





console.log( sum(1)(2).valueOf() );              // == 3           // 1 + 2
console.log( sum(1)(2)(3) == 6);                // true             // 1 + 2 + 3
console.log( sum(5)(-1)(2).valueOf() );          // == 6
console.log( sum(6)(-1)(-2)(-3).valueOf() );     // == 0
console.log( sum(0)(1)(2)(3)(4)(5).valueOf() );  //== 15

alert("End");