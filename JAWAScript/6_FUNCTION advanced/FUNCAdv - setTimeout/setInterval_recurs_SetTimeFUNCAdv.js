/* JawaScript - setInterval_recurs_SetTimeFUNCAdv.

    реализация setInterval => вложенный (рекурсивньій) setTimeout
 */
'use strict';

alert("Start setInterval_recurs_SetTimeFUNCAdv");
  



function sayHi() {
    alert("Hi");
}

let timerId = setTimeout(  // зовнішній планувальник спрацює тільки один раз через 1с

    function circle() {     // рекурсивна функція

        sayHi();
                            // рекурсивний виклик circle:
        timerId = setTimeout(circle, 1500);    // внутрішній планувальник виконує усі наступні ітерації з періодом 1.5 с

        if (timerId == 5) clearTimeout(timerId);    // обмеження через автоінкриментовану змінну timerId
    },

1000);



alert("End");