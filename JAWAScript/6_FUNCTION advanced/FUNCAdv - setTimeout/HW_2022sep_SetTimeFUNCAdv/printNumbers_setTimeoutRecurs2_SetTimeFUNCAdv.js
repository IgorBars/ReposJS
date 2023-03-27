/* JawaScript - printNumbers_setTimeoutRecurs2_SetTimeFUNCAdv.

    Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Используя вложенный (рекурсивньій) setTimeout.
 */
'use strict';

alert("Start printNumbers_setTimeoutRecurs2_SetTimeFUNCAdv");


function printNumbers(from, to) {   // приймає потрібні параметри, стають локальними

    function getnumb() {        // ф-я одноразового показу зовнішньої локальної змінної (і її інкременту)

        alert(from);
          // умова неповторювання setTimeout (обмеження ітерацій)
        if (from < to) setTimeout (getnumb, 1000);  // внутрішній циклічний планувальник (багаторазовий)

        from += 1;
    } 
    
    setTimeout (getnumb, 800); // зовнішній разовий початковий планувальник
    // setTimeout (getnumb); // без початкової затримки
}
  
printNumbers(3, 10);


alert("End");