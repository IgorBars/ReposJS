/* JawaScript - Создайте функцию getSecondsToTomorrow(), 
возвращающую количество секунд до завтрашней даты. */


'use strict';

alert("Start getSecondsToTomorrow1_TimeDate");

// function getSecondsToTomorrow(hour){
function getSecondsToTomorrow(){
    // let now = new Date(2021, 0, 1, hour);
    let now = new Date();
    let AllSeconds = 24 * 3600;
    let difSeconds = AllSeconds - now.getHours() * 3600 - now.getMinutes() * 60 - now.getSeconds();
    return difSeconds;
}

alert( getSecondsToTomorrow() );  //
// alert( getSecondsToTomorrow(23) );  //
alert("End");
