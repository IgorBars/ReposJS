/* JawaScript -     HW_replacer_JSONDate   JSON   

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
*/
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

alert( JSON.stringify(meetup, function replacer(key, value) {
    // return ( (key == "occupiedBy" || key == "self") && value == meetup ) ? undefined: value;
    return ( (key != "") && value == meetup ) ? undefined: value;
})
);
  
/* в результате должно быть:  
{
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
}

Просто автор статьи заменил более очевидную запись;
return ( (key == "occupiedBy" || key == "self") && value == meetup ) ? undefined: value;
, где из процесса очевидно отбрасьіваются ДВЕ парьі ключ-значение

на более короткую, но не очевидную))
return ( (key != "") && value == meetup ) ? undefined: value;

И вьіражение ''чтобы исключить первый вызов'' нужно понимать, как ''чтобы исключить первый вызов ИЗ ОТБРАСЬІВАЕМЬІХ'' .
 То есть, без указания в условии key != "" из процесса отбросились бьі все три парьі ключ-значение 
 со значением value: meetup (key: "", value: meetup), (key: "occupiedBy", value: meetup), (key: "self", value: meetup).

И конечно же, для универсальности подхода, когда в будущем могут добавиться новьіе кольцевьіе ссьілки, правильньій
 подход - не перечислять в условии существующие, а исключить сразу наперед все возможньіе кольцевьіе ссьілки, пропустив
  на преобразование только первьій вьізов парьі со значением meetup (key == "", value == meetup)
   (читай - отсеивая все возможньіе парьі со значением meetup, кроме первой )
*/

alert("End");
