/* JawaScript - Замыкания 
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
(inArray([...]) – находится в данном массиве.)
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
(arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива)
*/
'use strict';


alert("Start HW_inBetween_ZamykFUNCAdv");

// function inBetween(a, b) {

//     return function(elem) {
//         return (a <= elem && elem <= b)? true: false;
//     };
// }

function inBetween(a, b) {

    return elem => (a <= elem && elem <= b)? true: false;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

//тобто потрібно вернути функцію f, яку ми зазвичай пишемо у arr.filter(f)

alert("End");
