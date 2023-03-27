/* JawaScript -  принимает массив arr, удаляет в нём элементы вне a и b */
'use strict';

alert("Start filterRangeInPlace2021_ArrayDate");


// function filterRangeInPlace(arr, a, b) {
//     arr.forEach(function(item, index) {
//         if ((a >= item) || (item >= b)) arr.splice(index, 1);
//     }
//     );
    
// }

// function filterRangeInPlace(arr, a, b) {
//     arr.map(function(item, index) {
//         if ((a >= item) || (item >= b)) arr.splice(index, 1);
//     }
//     );

// }

function filterRangeInPlace(arr, a, b) {
    arr.map((item, index) => {
        if ((a >= item) || (item >= b)) 
        arr.splice(index, 1);
    }
    );

}


let arr = [5, 3, 8, 1, 0];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]

alert("End");
