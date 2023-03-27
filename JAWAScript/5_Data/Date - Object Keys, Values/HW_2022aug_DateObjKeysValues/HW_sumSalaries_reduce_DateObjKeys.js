/* JawaScript - HW_sumSalaries_reduce_DateObjKeys */


'use strict';

alert("Start HW_sumSalaries_reduce_DateObjKeys");

function sumSalaries(obj) {

    return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
alert( sumSalaries(salaries) ); // 650

alert("End");
