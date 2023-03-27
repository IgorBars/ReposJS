/* JawaScript - возвращает «европейский» день недели для даты date
Пн(1)...Вс(7) => 1 ... 7 */


'use strict';

alert("Start getLocalDay1_TimeDate");



// let arrDay = ["7 -Вс", "1 -Вт", "2 -Ср", "3 -Чт", "4 -Пт", "5 -Сб"];

// let date = new Date(2012, 0, 1);                // 3 января 2012 года

// function getWeekDay(date) {
    
//     return arrDay[date.getDay()];
// }

// alert( "День недели:  " + getWeekDay(date) );     // нужно вывести "7"


function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
      day = 7;
    }
  
    return day;
  }


alert("End");
