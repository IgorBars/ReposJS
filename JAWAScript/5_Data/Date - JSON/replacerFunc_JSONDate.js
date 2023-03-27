/* JawaScript - JSON  replacer - с функцией */
'use strict';

alert("Start replacerFunc_JSONDate");

// К счастью, в качестве replacer мы можем использовать функцию, а не массив

// Функция будет вызываться для каждой пары (key, value), и она должна 
//возвращать заменённое значение, которое будет использоваться вместо 
//исходного. Или undefined, чтобы пропустить значение.

// В нашем случае мы можем вернуть value «как есть» для всего, 
//кроме occupiedBy. Чтобы игнорировать occupiedBy, код ниже 
//возвращает undefined. Функция будет вызываться для каждой пары (key, value),
//  и она должна возвращать заменённое значение, которое будет использоваться 
//  вместо исходного. Или undefined, чтобы пропустить значение.

// В нашем случае мы можем вернуть value «как есть» для всего, кроме 
//occupiedBy. Чтобы игнорировать occupiedBy, код ниже возвращает undefined:

let room = {
    number: 23
};
  
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};
  
room.occupiedBy = meetup; // room ссылается на meetup

alert( JSON.stringify(meetup, function replacer(key, value) {   // alert - виведемо результат JSON-кодування
  alert(`${key}: ${value}`);                                    // продемонструємо тут пари ключ-значення, що перебираються під капотом
  return (key == 'occupiedBy') ? undefined : value;
}));
  
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



// Форматирование: space
//Третий аргумент в JSON.stringify(value, replacer, space) – это количество пробелов, используемых для удобного форматирования.
//Ниже space = 2 указывает JavaScript отображать вложенные объекты в несколько строк с отступом в 2 пробела внутри объекта:

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2)); // null -без обробки циклопосилань;   2 -отступ в 2 пробела внутри объекта
/* отступ в 2 пробела:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* для JSON.stringify(user, null, 4) результат содержит больше отступов:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/



alert("End");
