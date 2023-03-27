/* JawaScript - arr2_Array*/
'use strict';

alert("Start arr2_Array");

let arr = [];
arr [4] = "qw";//добавляем 4-й элемент
arr [5] = "er";
arr.push("ty");//добавляем 6-й эл в конец
arr.shift();  // вырезая первый, в начало сдвигается вся последовательность элементов
alert("- arr.shift() = arr.length  " + arr.length);// 6
alert( arr[4] ); //вместе с пустыми, er
alert( arr[5] ); // ty
alert( arr[6] );// undefined

arr [55] = "nm";
alert("+ arr [55] = arr.length  " + arr.length); // 56

alert("End");
