/* JawaScript - возвраnbnm сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0. */


'use strict';

alert("Start HW_sumSalaries_DateObjKeys");

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, current ) => sum + current, 0 );   
}

// function sumSalaries(salaries) { 
//     let sum = 0;
//     for(let val of Object.values(salaries)) {
//         sum += val;
//     }
//     return sum;
// }

// salaries = {};
alert( sumSalaries(salaries) ); // 650


alert("End");
