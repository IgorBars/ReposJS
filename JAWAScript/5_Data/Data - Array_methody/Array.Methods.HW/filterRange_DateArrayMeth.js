/* JawaScript - filterRange_DateArrayMeth
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём 
элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.
*/
'use strict';

alert("Start filterRange_DateArrayMeth");

function filterRange(arr, a, b) {

    return arr.filter( item => item >= a && item <= b );
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)

alert("End");
