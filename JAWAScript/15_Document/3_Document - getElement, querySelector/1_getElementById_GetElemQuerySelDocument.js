/* JawaScript - 1_getElementById_GetElemQuerySelDocument       document.getElementById(id) - МЕТОДЬІ ПОИСКА

Значение id должно быть уникальным. В документе может быть только один элемент с данным id.

Если в документе есть несколько элементов с одинаковым значением id, то поведение методов поиска непредсказуемо. 
Браузер может вернуть любой из них случайным образом. Поэтому, пожалуйста, придерживайтесь правила сохранения уникальности id.

Только document.getElementById, а не anyElem.getElementById:
    - Метод getElementById можно вызвать только для объекта document. Он осуществляет поиск по id по всему документу.
*/

'use strict';
alert("Start 1_getElementById_GetElemQuerySelDocument");


// получить элемент
let elem = document.getElementById('elem');

// сделать его фон красным
elem.style.background = 'red';


alert("End");