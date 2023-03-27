/* JawaScript - функцию getSecondsToday(), возвращающую количество секунд 
с начала сегодняшнего дня. */


'use strict';

alert("Start getSecondsToday_TimeDate");

function getSecondsToday(){

    // let now = new Date(2020, 10, 1);
    // now.setHours(10);
    let now = new Date();
    alert("now: " + now);

    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

alert(getSecondsToday());  //36000  (3600 * 10)

alert("End");
