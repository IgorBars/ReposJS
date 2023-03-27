/* JawaScript - Создайте функцию getSecondsToTomorrow(), 
возвращающую количество секунд до завтрашней даты. */


'use strict';

alert("Start getSecondsToTomorrow_TimeDate");

// function getSecondsToTomorrow(){

//     let now = new Date();

//     return 24 * 60 * 60 - 3600* now.getHours() - 60 * now.getMinutes() - now.getSeconds();
// }

function getSecondsToTomorrow(){
    let now = new Date();
        //alert("now: " + now);
    let tomor = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        //alert("tomor: " + tomor);
    let dif = tomor - now;
    
    return Math.round(dif/1000);
}

alert(getSecondsToTomorrow());  //

alert("End");
