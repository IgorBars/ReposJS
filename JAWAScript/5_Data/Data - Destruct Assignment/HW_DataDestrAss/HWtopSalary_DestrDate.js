/* JawaScript - возвращает имя самого высокооплачиваемого сотрудника */ 

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них. */


'use strict';

alert("Start HWtopSalary_Map_Set");

// let salaries = {};
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salar) {

  let MaxName = null;
  let SalarieMax = 0;

  for (let [name, value] of Object.entries(salar)) {

    if( SalarieMax < value) {
      SalarieMax = value;
      MaxName = name;
    }
  }

  return MaxName;
}

alert("MaxName: " + topSalary(salaries));

alert("End");

