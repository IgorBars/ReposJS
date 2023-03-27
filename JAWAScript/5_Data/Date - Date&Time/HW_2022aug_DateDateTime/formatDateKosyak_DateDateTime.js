/* JawaScript - formatDateKosyak_DateDateTime         Объект Time 
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
всё в виде двух цифр, т.е. 31.12.16 10:00.
*/


'use strict';

alert("Start formatDateKosyak_DateDateTime");

function formatDate (date) {

    if ((Date.now() - date.getTime()) < 1000) {
        // return alert("прямо сейчас");                // return alert("прямо сейчас"); => return "прямо сейчас";
        return "прямо сейчас";
    }

    else if ((Date.now()-date.getTime())<60000){
        let n = (Date.now()-date.getTime()) / 1000;     // * => /
        // return alert(`${n} сек. назад`);
        return `${n} сек. назад`;
    }

    else if ((Date.now()-date.getTime())<3600000){
        let min = (Date.now()-date.getTime()) / 60000;  // 2        m => min
        // return alert(`${min} мин. назад`);
        return `${min} мин. назад`;
    }

    else {
        // let y = date.getYear();                      // getYear => getFullYear
        let y = date.getFullYear();
        let mon = date.getMonth();  //1     m => mon
        let d = date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
    // return alert(`${d}.${mon}.${y} ${h}:${m}`);
    return `${d}.${mon}.${y} ${h}:${m}`;
    }
}                                                                                 // HH.mm.ss: 13:04:27


// alert( formatDate() );  //

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"                   точка часу 1мс тому

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"          точка часу 30 сек тому

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

alert("End");

