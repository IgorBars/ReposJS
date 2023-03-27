/* JawaScript - Исключить обратные ссылки */
'use strict';

alert("Start HW_replacer_JSONDate");

let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
  // цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
room.place = meetup;
meetup.react =  meetup;


//для исключения значение meetup не закавычивается !
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key !== "" && value == meetup) ? undefined: value;
 
}));
/*
{"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
"place":{"number":23}}
*/

alert("End");
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
//   }));