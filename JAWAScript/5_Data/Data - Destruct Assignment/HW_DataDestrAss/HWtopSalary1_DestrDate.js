/* JawaScript - возвращает имя самого высокооплачиваемого сотрудника */ 

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

'use strict';

alert("Start HWtopSalary1_Map_Set");

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function topSalary1(salaries) {
    let [a = 0, b = 0, c = 0, d = 0, e = 0] = Object.values(salaries);
    // let valueMax = Math.max(a, b, c, d, e);
    let valueMax = Math.max(...Object.values(salaries));

    for (let [ key, value] of Object.entries(salaries)) {
        if ( value == valueMax ) return key;
    }
    return null;
}


// salaries = {};
// function topSalary(salaries) {
//     let valMax = 0;
//     let nameMax = null;

//     for(let [key, value] of Object.entries(salaries)) {

//         if (value > valMax) {
//             valMax = value;
//             nameMax = key;
//         }
//     }
//     return nameMax; 
// }

alert("topSalary1: " + topSalary1(salaries));
// alert("topSalary: " + topSalary(salaries));

alert("End");

