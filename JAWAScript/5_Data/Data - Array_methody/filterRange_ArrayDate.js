/* JawaScript - принимает массив arr, ищет в нём элементы между a и b 
и отдаёт массив этих элементов. */
'use strict';

alert("Start filterRange_ArrayDate");

let arr = [5, 3, 8, 1, 7, 2];

function filterRange(arr, a, b) {

let arrRange = arr.filter(item => item >= a && item <= b);

return arrRange;
}

alert(`Result: ${filterRange(arr, 1, 4)}`); //  Result: 3,1,2
alert(arr); //  5,3,8,1,7,2

alert("End");
