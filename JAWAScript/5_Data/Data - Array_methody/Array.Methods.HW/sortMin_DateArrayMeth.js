/* JawaScript - sortMin_DateArrayMeth
Сортировать в порядке по убыванию

*/
'use strict';

alert("Start sortMin_DateArrayMeth");

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10


alert("End");
