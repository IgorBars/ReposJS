/* JawaScript - getLastDayOfMonth_Time*/


'use strict';

alert("Start getLastDayOfMonth_TimeDate");

// function getLastDayOfMonth(year, month) {
    
//     let date = new Date(year, month + 1);   //  уст на месяц больше

//     date.setDate(date.getDate() - 1);       //  уст на день меньше  
    
//     return date.getDate();  
// }


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);    //мин коррект зн дня: 1
    return date.getDate();  // автокоррекция дня в последний день пред месяца
  }

alert("Result: " + getLastDayOfMonth(2012, 1)); //  29
alert("Result: " + getLastDayOfMonth(2011, 1)); //  28

alert("End");
