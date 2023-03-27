/* JawaScript - _setTimeout_SetTimeFUNCAdv.

    Планувальник з аргументами:
 */
'use strict';

alert("Start _setTimeout_SetTimeFUNCAdv");

// function sayHi() {
//     alert("Hi");
// }
// let timerId = setTimeout( sayHi, 2000 );  // sayHi - без дужок виклику() !!!
  
let phr = "Hi";    // лексичне оточення sayHi для першого setTimeout

let wh = "Frend";

function sayHi(phrase, who) {
    alert(`${phrase}, ${who}`);
}

sayHi("Hallo", "Word");

// ф-я func у setTimeout записується без викликаючих дужок, тож для параметрів/аргументів func передбачили місце у setTimeout
let timerId = setTimeout( sayHi, 1500, phr, wh);  // Hi, Frend  (аргументи для func "протягуються" у запис setTimeout після t)

phr = "Buy";    // змінюємо змінні лексичного оточення sayHi для другого setTimeout

wh = "Tom";

timerId = setTimeout(() => sayHi(phr, wh), 2500); // Buy, Tom   (через 2000мс виконається стрілочна ф-я, яка викличе sayHi)

// лексичне оточення sayHi фотографується у момент створення у setTimeout і зберігається до моменту виклику 




alert("End");