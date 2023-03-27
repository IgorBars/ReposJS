/* JawaScript - возвращает «европейский» день недели для даты date
Пн(1)...Вс(7) => 1 ... 7 */


'use strict';

alert("Start getLocalDay1_TimeDate");


date = new Date(2012, 0, 1);

function getLocalDay(d) {
    
    if (d.getDay() == 0)
    return 7;
    return d.getDay();
}

alert( getLocalDay(date) ); 



alert("End");
