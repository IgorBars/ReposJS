/* JawaScript - getLocalDay_DateDateTime         Объект Time 
 Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
*/


'use strict';

alert("Start getLocalDay_DateDateTime");

// function getLocalDay(date) {

//     let objDays = {0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6};

//     return objDays[date.getDay()];
// }

function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) day = 7;

    return day;
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getLocalDay(date) );       // вторник, нужно показать 2



alert("End");

