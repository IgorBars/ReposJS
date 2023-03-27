/* JawaScript - Деструктурирующее присваивание 
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. 
*/

'use strict';

alert("Start HW_topSalarySort_DataDestrAss");

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let arr = Object.entries(salaries); // [ ["John", 100], ["Pete", 300], ["Mary", 250] ]
    
    if (!arr.length) return null;
    
    arr.sort((a, b) => b[1] - a[1]);    // a[0] => "John"    a[1] => 100    b[0] => "Pete"  b[1] => 300
                                        // [ ["Pete", 300], ["Mary", 250], ["John", 100] ]
    return arr[0][0];
  }

alert( topSalary( salaries ) );

alert("End");
