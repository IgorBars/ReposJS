/* JawaScript - 1_handler_setAttribute_BrowserEventsEvents               setAttribute("on<событие>", "function()")

Обработчик может быть назначен методом setAttribute("on<событие>", "function()").
Но такой метод установки Обработчика setAttribute не рекомендован.                      (!!!)

<input value="Нажми меня"  type="button">
*/

'use strict';
alert("Start 1_handler_setAttribute_BrowserEventsEvents");

let input = document.querySelector('input');

input.setAttribute('onclick', "alert('Клик!')");   // установим атрибут из JS

alert( input.outerHTML );   // проверим успешную установку атрибута
for (let {name, value} of input.attributes) {alert(name + ": " + value);}

alert("End");