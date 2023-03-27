/* JawaScript - getLastDayOfMonth_DateDateTime         Объект Time 
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
Иногда это 30, 31 или даже февральские 28/29.
*/


'use strict';

alert("Start getLastDayOfMonth_DateDateTime");

// let getLastDayOfMonth = (year, month) => (new Date(year, (++month), 0)).getDate();


function getLastDayOfMonth(year, month) {
    // дата з наступним місяцем але числом 0, що автокорегує у останнє число попереднього місяця
    let date = new Date(year, month + 1, 0);

    return date.getDate();
}

alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28


alert("End");

