/* JawaScript - formatDate1_DateDateTime         Объект Time 
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
всё в виде двух цифр, т.е. 31.12.16 10:00.
*/


'use strict';

alert("Start formatDate1_DateDateTime");

function formatDate() {
    
    let date = new Date();

    let arrdate = [
        "0" + date.getDate(),

        "0" + (date.getMonth() + 1),
    
        "" + date.getFullYear(),
    
        "0" + date.getHours(),
    
        "0" + date.getMinutes(),
    
        "0" + date.getSeconds(),

    ].map( component => component.slice(-2) );

    let arrdateYear = arrdate.slice(0, 3).join(".");

    let arrdateHour = arrdate.slice(3).join(":");

    return "DD.MM.YY:  " + arrdateYear + "\n" + "HH.mm.ss:  " + arrdateHour;        // DD.MM.YY: 25.08.22
}                                                                                   // HH.mm.ss: 13:04:27


alert( formatDate() );  //

alert("End");

