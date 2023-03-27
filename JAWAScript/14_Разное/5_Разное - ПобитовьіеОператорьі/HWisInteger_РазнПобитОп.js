/* JawaScript - _РазнПобитОп
Напишите функцию isInteger(num), которая возвращает true, 
если num – целое число, иначе false.
*/
'use strict';

alert("Start HWisInteger_РазнПобитОп");

function isInteger1(num) {
    return num === ~~num;
}

function isInteger(num) {
    return (num ^ 0) === num;
  }

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false




alert("End");

