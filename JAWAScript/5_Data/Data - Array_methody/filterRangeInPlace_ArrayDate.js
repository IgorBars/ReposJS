/* JawaScript - принимает массив arr, удаляет в нём элементы вне a и b */
'use strict';

alert("Start filterRangeInPlace_ArrayDate");


let arr = [5, 3, 8, 1, 5, 2, 7];

function filterRangeInPlace(arr, a, b) {

    arr.forEach((item, index) => {

        if(item < a || item > b) arr.splice(index, 1);

    });    
}

filterRangeInPlace(arr, 1, 4);
alert(`arr filterRangeInPlace: ${arr}`);


alert("End");
