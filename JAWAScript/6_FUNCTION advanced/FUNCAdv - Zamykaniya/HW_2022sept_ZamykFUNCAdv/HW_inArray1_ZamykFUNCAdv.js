/* JawaScript - Замыкания 
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте «готовый к употреблению» фильтр:


inArray([...]) – находится в данном массиве.
Он должен использоваться таким образом:


arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
*/
'use strict';


alert("Start HW_inArray1_ZamykFUNCAdv");

// function inArray(arr) {

//     return function(elem) {
//         return arr.includes(elem);
//     };
// }

function inArray(arr) {

    return elem => arr.includes(elem);
}

let arr = [1, 2, 3, 4, 5, 6, 7];



alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//тобто потрібно вернути функцію f, яку ми зазвичай пишемо у arr.filter(f)

alert("End");
