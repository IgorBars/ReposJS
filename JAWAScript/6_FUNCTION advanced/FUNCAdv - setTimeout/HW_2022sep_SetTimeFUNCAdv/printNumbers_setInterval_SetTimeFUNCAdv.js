/* JawaScript - printNumbers_setInterval_SetTimeFUNCAdv.

    Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Используя setInterval.
 */
'use strict';

alert("Start printNumbers_setInterval_SetTimeFUNCAdv");


function printNumbers(from, to) {   // приймає потрібні параметри, стають локальними

    function getnumb() {        // ф-я одноразового показу зовнішньої локальної змінної (і її інкременту)

        alert(from);
        from += 1;

        if (from > to) clearInterval(timerId); // умова зупинки setInterval 
    } 
    
    let timerId = setInterval (getnumb, 1000);
}
  
printNumbers(3, 10);


alert("End");