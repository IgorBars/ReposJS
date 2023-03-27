/* JawaScript - formatDateExtended_DateDateTime         Объект Time 
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
всё в виде двух цифр, т.е. 31.12.16 10:00.
*/


'use strict';

alert("Start formatDateExtended_DateDateTime");

function formatDate() {
    
    let date = new Date();

    let objdate = {
        "numDay": "0" + date.getDate(),

        "month": "0" + (date.getMonth() + 1),
    
        "year": "" + date.getFullYear(),
    
        "hours": "0" + date.getHours(),
    
        "minutes": "0" + date.getMinutes(),
    
        "seconds": "0" + date.getSeconds(),
    };

    let arrdate = Object.entries(objdate);             // numDay,025,month,08,year,2022,hours,013,minutes,042,seconds,046

    let arrdatecorr = arrdate.map( ([key, value]) => (
        
        [key, value.slice(-2)].join(": ")                        // numDay,25,month,08,year,22,hours,13,minutes,43,seconds,50
                                                                // numDay: 25,month: 08,year: 22,hours: 13,minutes: 43,seconds: 50
    ));

    let tablo = Object.values(objdate).map( value => (
        
        value.slice(-2)                                         // 25,08,22,13,43,50
    
    ));

    let tabloYear = tablo.slice(0,3).join(". ");

    let tabloHour = tablo.slice(3).join(": ");

    alert(tabloYear + "  " + tabloHour);

    return arrdatecorr.join("  ");
}


alert( formatDate() );  //

alert("End");

