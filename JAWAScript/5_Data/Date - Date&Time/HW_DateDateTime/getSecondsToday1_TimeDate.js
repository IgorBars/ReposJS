/* JawaScript - функцию getSecondsToday(), возвращающую количество секунд 
с начала сегодняшнего дня. */


'use strict';

alert("Start getSecondsToday1_TimeDate");

function getSecondsToday(Hour, Minut) {
    let Today = new Date(2021, 1, 3, Hour, Minut);
    // alert("Today.getHours():  " + Today.getHours());
    return Today.getHours() * 3600 + Today.getMinutes() * 60 + Today.getSeconds();
}

alert(getSecondsToday(9, 60));  //36000  (3600 * 10)

alert("End");
