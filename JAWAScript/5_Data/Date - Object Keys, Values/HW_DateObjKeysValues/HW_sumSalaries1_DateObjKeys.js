/* JawaScript - HW_sumSalaries1_DateObjKeys*/


'use strict';

alert("Start HW_sumSalaries1_DateObjKeys");

function sumSalaries(salar) {   // перебором
    let sumSalar = 0;

    for (let value of Object.values(salar)) {

        sumSalar += value;
    }
    return sumSalar;
}

function sum_Salaries(salar) {  // методом .reduce
    return Object.values(salar).reduce((sum, item) => sum + item, 0);
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
alert( sumSalaries(salaries) ); // 650
alert( sum_Salaries(salaries) );

alert("End");
