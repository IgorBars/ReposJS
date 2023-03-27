/* JawaScript - JSON  replacer - с функцией */
'use strict';

alert("Start replacerFunc1_JSONDate");



let room = {
    number: 23
};
  
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};
  
room.occupiedBy = meetup; // room ссылается на meetup

alert( JSON.stringify(meetup, replacer = (key, value) =>(    // alert - виведемо результат JSON-кодування
                                                                   // продемонструємо тут пари ключ-значення, що перебираються під капотом
     (key == 'occupiedBy') ? undefined : value
))
);
  
  /* пары ключ:значение, которые приходят в replacer:
  :             [object Object]                       // перша пара особлива, ключ має порожню строку  "": [object Object] => meetup
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  occupiedBy: [object Object]
  */

/* Результат в формате JSON:
{"title":"Conference","participants":[{"name":"John"},
{"name":"Alice"}],"place":{"number":23}}
*/




alert("End");
