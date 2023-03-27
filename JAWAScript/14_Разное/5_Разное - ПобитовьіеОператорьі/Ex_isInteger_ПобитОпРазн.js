/* JawaScript - Ex_isInteger_ПобитОпРазн
Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
*/
'use strict';

alert("Start Ex_isInteger_ПобитОпРазн");

var str = "Проверка";


function isInteger(num){

    return num === ~~num;
    // return num === (0 ^ num);
}

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false


alert("End");

