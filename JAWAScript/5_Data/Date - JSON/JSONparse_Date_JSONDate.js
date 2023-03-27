/* JawaScript - JSON -JSON.parse */
'use strict';

alert("Start JSONparse_Date_JSONDate");



//      reviver

//Давайте передадим JSON.parse функцию восстановления вторым аргументом, 
//которая возвращает все значения «как есть», но date станет Date:
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( "meetup.date:  " + meetup.date );
alert( "meetup.date.getDate():  " + meetup.date.getDate() ); // 30 - теперь работает!



// Кстати, это работает и для вложенных объектов:

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date );
alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!


alert("End");
