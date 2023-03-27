/* JawaScript - Деструктурирующее присваивание 
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. 
*/

'use strict';

alert("Start HW_topSalary_DataDestrAss");

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {
    if ( Object.entries(obj).length == 0 ) return null;
    let topName;
    let topSal = 0;

    for( let [name, salarie] of Object.entries(obj) ) {

        if (salarie > topSal) {
            topSal = salarie;
            topName = name;
        }
    }
    return topName + ": " + topSal;
}

alert( topSalary( salaries ) );

alert("End");
