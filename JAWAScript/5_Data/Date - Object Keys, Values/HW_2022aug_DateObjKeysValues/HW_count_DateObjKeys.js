/* JawaScript - HW_count_DateObjKeys
Напишите функцию count(obj), которая возвращает количество свойств объекта:
*/


'use strict';

alert("Start HW_count_DateObjKeys");

function count(obj) {

    return Object.keys(obj).length;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
alert( count(salaries) ); // 3

alert("End");
