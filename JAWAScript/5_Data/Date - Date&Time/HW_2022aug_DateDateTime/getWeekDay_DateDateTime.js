/* JawaScript - getWeekDay_DateDateTime         Объект Time 
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/


'use strict';

alert("Start getWeekDay_DateDateTime");

function getWeekDay(date) {

    let arrDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return arrDays[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );



alert("End");

