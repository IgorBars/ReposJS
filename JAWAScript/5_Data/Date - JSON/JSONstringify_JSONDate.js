/* JawaScript - JSON  начало, JSONstringify, replacer - с массивом требуемых свойств */
'use strict';

alert("Start JSONstringify_JSON_Date");

//Сигнтаксис:
// let json = JSON.stringify(value, [replacer, space]);
// value - Значение для кодирования (ім'я об'єкта => meetup)
// 

// replacer -
// Массив свойств-для-кодирования   => ['title', 'participants'] 
//        
// или функция соответствия replacer = function(key, value)(если нам нужно настроить процесс замены, например, отфильтровать циклические ссылки)

// space -
// Дополнительное пространство (отступы), используемое для форматирования.



            //  !!! Если мы передадим ему массив свойств, будут закодированы только эти свойства. !!!

// Например:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

alert( JSON.stringify(meetup, ['title', 'participants']) ); // 'title', 'participants' - вказуєм потрібні властивості
                                                            // {"title":"Conference","participants":[{},{}]}  ??
// для кодирования name внутри participants добавим в перечисленньіе свойства и name.

// Мало того,
// Давайте включим в список все свойства, кроме room.occupiedBy, 
//из-за которого появляется цикличная ссылка:

room = {
  number: 23
};

meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

// помещаем в массив все св-ва, кроме .occupiedBy
alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],            !!!
  "place":{"number":23}
}
*/


// Тобто, за наявності циклічного посилання ми змушені внести до массиву властивостей абсолютно ВСІ потрібні властивості

// К счастью, в качестве replacer мы можем использовать функцию, а не массив (див файл replacerFunc_JSON_Date)


alert("End");
