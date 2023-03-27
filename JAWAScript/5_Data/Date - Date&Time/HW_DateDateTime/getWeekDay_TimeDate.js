/* JawaScript - getWeekDay_Time*/


'use strict';

alert("Start getWeekDay_TimeDate");

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(d) {

    //let Day = {0: "ВС", 1: "ПН", 2: "ВТ", 3: "СР", 4: "ЧТ", 5: "ПТ", 6: "СБ"};
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    //return Day[d.getDay()];
    return days[d.getDay()];
}

alert( getWeekDay(date) );        // нужно вывести "ВТ"




alert("End");
