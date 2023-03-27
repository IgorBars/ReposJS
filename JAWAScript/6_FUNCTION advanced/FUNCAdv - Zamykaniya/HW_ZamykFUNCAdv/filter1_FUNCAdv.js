/* JawaScript - Замыкания. 
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
-взвращает совпадения

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.

 */
'use strict';


alert("Start filter_FUNCAdv");

// function inBetween(a, b) {

//     return function (item) {
//         return a <= item && item <= b;
//     };
// }
function inBetween(a, b) {

    return item => a <= item && item <= b;
}



// function inArray(ar) {

//     return function (item) {
//         return ar.includes(item);
//     };
// }
function inArray(ar) {

    return item => ar.includes(item);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

alert("End");
