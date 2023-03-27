/* JawaScript - getDateAgo_DateDateTime         Объект Time 
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
*/


'use strict';

alert("Start getDateAgo_DateDateTime");


// function getDateAgo(date, days) {

//     let dif = date.getTime() - days * 24 * 3600 * 1000;
//     return (new Date(dif)).getDate();
// }

// function getDateAgo(date, days) {

     

//      let dateCopy = new Date(date); // клонуємо об'єкт дати

//      dateCopy.setDate(date.getDate() - days);   //отримали число місяця із date, відняли задану кількість днів, встановили нове число місяця
//      return dateCopy.getDate();
// }


function getDateAgo(date, days) {
    let daysTimeStamp = days * 3600 * 24 * 1000;
    return new Date(date.getTime() - daysTimeStamp)
}


let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)



alert("End");

