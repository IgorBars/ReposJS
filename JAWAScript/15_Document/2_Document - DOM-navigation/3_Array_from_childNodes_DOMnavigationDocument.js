/* JawaScript - 3_Array_from_childNodes_DOMnavigationDocument              childNodes - СРЕДСТВА НАВИГАЦИИ

childNodes похож на массив. На самом деле это не массив, а коллекция – особый перебираемый объект-псевдомассив.
Но мы можем создать настоящий массив из коллекции, используя Array.from:
*/

'use strict';
alert("Start 3_Array_from_childNodes_DOMnavigationDocument");

let arrCN = Array.from(document.body.childNodes);

alert(arrCN);


alert( Array.from(document.body.childNodes).filter ); // сделали массив (нет ошибки на .filter)


/*
Почти все DOM-коллекции, за небольшим исключением, живые. Другими словами, они отражают текущее состояние DOM.

Если мы сохраним ссылку на elem.childNodes и добавим/удалим узлы в DOM, то они появятся в сохранённой коллекции автоматически.
*/

alert("End");