/* JawaScript - setInterval_recurs2_SetTimeFUNCAdv.

    реализация setInterval => вложенный (рекурсивньій) setTimeout с увеличивающейся задержкой
 */
'use strict';

alert("Start setInterval_recurs2_SetTimeFUNCAdv");
  



function showDelay() {
    alert("delay: " + delay + "ms" + "\n" + "timerId: " + (9 - timerId));   // delay: 1000ms
}                                                                           // timerId: 8

let delay = 1000;

let timerId = setTimeout(  // зовнішній планувальник спрацює тільки один раз через 1с

    function circle() {     // рекурсивна функція

        showDelay(); delay += 200;
                            // рекурсивний виклик circle:
        timerId = setTimeout(circle, delay);    // внутрішній планувальник виконує усі наступні ітерації з періодом 1.5 с

        if (timerId == 10) {alert("Stop"); clearTimeout(timerId);}   // обмеження через автоінкриментовану змінну timerId
    },

1000);



alert("End");