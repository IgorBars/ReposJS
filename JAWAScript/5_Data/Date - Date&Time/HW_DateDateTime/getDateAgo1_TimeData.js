/* JawaScript - возвращающую число, которое было days дней назад от даты date. */


'use strict';

alert("Start getDateAgo1_TimeData");

function getDateAgo(date, days) {
    let lastDate = new Date(date.getTime() - days * 24 * 3600 * 1000);
    return lastDate.getDate();
}
// date.getTime() - Teimstamp: ms
// days * 24 * 3600 * 1000): ms


let date = new Date(2015, 0, 2);
// alert("date.getDate():  " + date.getDate()); // вернуть число даты date
// alert("date.getTime():  " + date.getTime()); // вернуть Teimstamp даты date

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
alert("date:  " + date);

alert("End");
