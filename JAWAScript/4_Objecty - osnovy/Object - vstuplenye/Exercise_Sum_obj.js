/* JawaScript - Сумма свойств объекта */
'use strict';

alert("Start Exercise_Sum");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


function getSum(obj) {

    let result = 0;

    for (let key in obj) 
    {
        result += obj[key];
    }
    return result;
}

let sum = getSum(salaries);
alert(`sum: ${(sum)}`);


alert("End");