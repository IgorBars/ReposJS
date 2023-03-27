/* JawaScript - JSON -JSON.parse */
'use strict';

alert("Start JSONparse_JSONDate");

/*
 JSON.parse
 Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.

 Синтаксис:
 let value = JSON.parse(str, [reviver]);

 str - JSON для преобразования в объект.

 reviver - Необязательная функция, которая будет вызываться для каждой
  пары (ключ, значение) и может преобразовывать значение.
*/


// строковый массив в фрмате JSON:
let numbersJSON = "[0, 1, 2, 3]";
let numbers = JSON.parse(numbersJSON);
alert( numbers[1] ); // 1

// Или для вложенных объектов:
let userJSON = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userJSON);
alert( user.friends[1] ); // 1

//Ошибки:
let json = `{
    name: "John",                     // Ошибка: имя свойства без кавычек
    "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
    'isAdmin': false                  // Ошибка: одинарные кавычки в ключе (должны быть двойными)
    "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения.
    "friends": [0,1,2,3]                     // Здесь всё в порядке
  }`;
//   Кроме того, JSON не поддерживает комментарии. Добавление комментария в JSON делает его недействительным.


//      reviver

//Давайте передадим JSON.parse функцию восстановления вторым аргументом, 
//которая возвращает все значения «как есть», но date станет Date:
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
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

alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!


alert("End");
