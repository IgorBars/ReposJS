/* JawaScript - возвратить день недели в коротком формате: «ПН», «ВТ»,.. */


'use strict';

alert("Start getWeekDay1_TimeDate");



let arrDay = ["0 -BC", "1 -ПН", "2 -BT", "3 -СР", "4 -ЧТ", "5 -ПТ", "6 -СБ"];

let date = new Date(2012, 0, 1);                // 1 января 2012 года

function getWeekDay(date) {
    return arrDay[date.getDay()];
}

alert( "День недели:  " + getWeekDay(date) );     // нужно вывести "ВТ"



alert("End");
