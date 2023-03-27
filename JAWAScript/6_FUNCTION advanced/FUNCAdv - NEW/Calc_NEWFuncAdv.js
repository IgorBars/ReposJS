/* JawaScript - Calc_NEWFuncAdv.

 */
'use strict';

alert("Start Calc_NEWFuncAdv");

let a;
let b;
function Calculator() {
    
    this.multiply = prompt('Введите выражение: ', "a * b");
    a = prompt('Введите a: ', 2);
    b = prompt('Введите b: ', 3);
    
    let f = new Function("a = 1", "b = 1", `return ${this.multiply}`);
    
    return f;
}

let calculator = new Calculator();

alert( calculator(a, b) );  // a * b        2      3       6
alert( calculator() );      // a * b        1
alert( calculator(6, 8) );  // 48

alert("End");