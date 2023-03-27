/* JawaScript - HW_sumSalaries1_DateObjKeys */


'use strict';

alert("Start HW_sumSalaries1_DateObjKeys");

function sumSalaries(obj) {
    let sum = 0;
    let arrSalaries = Object.values(obj);

    for (let salarie of arrSalaries) {

        sum += salarie;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
alert( sumSalaries(salaries) ); // 650

alert("End");
