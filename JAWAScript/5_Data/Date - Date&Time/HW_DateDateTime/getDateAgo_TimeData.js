/* JawaScript - возвращающую число, которое было days дней назад от даты date. */


'use strict';

alert("Start getDateAgo_TimeData");

let Fixdate = new Date(2015, 0, 2);

// function getDateAgo(date, days) {

//     let TSResult = date.getTime() - days * 24 * 60 * 60 * 1000;

//     return (new Date(TSResult)).getDate();
// }

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }


alert( getDateAgo(Fixdate, 1) ); //1

alert( getDateAgo(Fixdate, 2) ); // 31

alert( getDateAgo(Fixdate, 365) ); // 2

alert("2015, 0, 2:  " + Fixdate);

alert("End");
