/* JawaScript - formatDate_DateDateTime         Объект Time 
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

// alert( (new Date - 1) ); - віднімання 1 мс перетворює формат дати у вигляд   1661336040884 мс (таймстамп)
// alert( (new Date(new Date - 1661336040884)) ); - new Date від таймстампу - звичайний формат дати
'use strict';

alert("Start formatDate_DateDateTime");

function formatDate(date) {
    
    let passed = new Date() - date;    // пройшло мілісекунд

    switch (true) {
        case (passed < 1000): 
            return "прямо сейчас";

        case ( (1000 <= passed) && (passed < 1000 * 60) ): 
            return `${ Math.round(passed / 1000) } сек. назад`;

        case ( (1000 * 60 <= passed) && (passed < 1000 * 60 * 60) ):
            return`${ Math.round(passed / 1000 / 60) } мин. назад`;

        case (passed > 1000 * 60 * 60):
            alert("timePoint: " + date);
        
            let d = date;
            d = [
                '0' + d.getDate(),
                '0' + (d.getMonth() + 1),
                ''  + d.getFullYear(),
                '0' + d.getHours(),
                '0' + d.getMinutes(),
                '0' + d.getSeconds()
                ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

            // соединить компоненты в дату
            return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
        
}






// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"                   точка часу 1мс тому

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"          точка часу 30 сек тому

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

alert("End");

