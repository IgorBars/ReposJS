/* JawaScript - Преобразуйте объект в JSON, а затем обратно в обычный объект */
'use strict';

alert("Start HW_JsonObj_JSON_Date");

// alert(new Date(Date.UTC(2017, 0, 1)));// Sun Jan 01 2017 02:00:00 GMT+0200
// alert(new Date(2017, 0, 1));          // Sun Jan 01 2017 00:00:00 GMT+0200
// alert(new Date(Date.UTC(2021, 1, 5)));// Fri Feb 05 2021 02:00:00 GMT+0200
// alert(new Date());                    // Fri Feb 05 2021 13:05:54 GMT+0200

let room1 = {
  number: 45
};


let user = {
  name: "Василий Иванович",
  age: 35,
  room: {
      number: 23,
      participants: [{name: "john"}, {name: "ann"}],
    },
  room1
};

let userJSON = JSON.stringify(user);    // JSON-форматированный
/* 
JSON:  {"name":"Василий Иванович","age":35,
"room":{"number":23,"participants":[{"name":"john"},{"name":"ann"}]},
"room1":{"number":45}}
*/

alert("JSON:  " + userJSON);

let userParse = JSON.parse(userJSON);
alert("JSON.parse:  " + userParse.room.participants[1].name); // ann


alert("End");
