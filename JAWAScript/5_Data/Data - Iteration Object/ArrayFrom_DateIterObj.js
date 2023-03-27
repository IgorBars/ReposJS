/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start ArrayFrom_DateIterObj");

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2 // <= псевдомассив благодаря индексированным свойствам и 
                // свойству .length
};
// arrayLike.pop(); - ОШИБКА! Метод массива не применим к об'ьекту, даже если он является псевдо-массивом


// Для применения методов массивов к об'ьекту, из об'ьекта нужно создать массив и уже к нему применять методьі массива

// Array.from -- МЕТОД СОЗДАНИЯ МАССИВА ИЗ ИТЕРИРУЕМОГО ОБЪЕКТА или псевдомассива
let arr = Array.from(arrayLike);

alert("arr: " + arr);       //  Hello,World
alert("arr[0]: " + arr[0]); //  Hello
alert("arr[1]: " + arr[1]); //  World

alert( arr.pop() );            // World                 РАБОТАЕТ метод массивов на массиве arr, созданном из псевдомассива arrayLike

alert("End");
