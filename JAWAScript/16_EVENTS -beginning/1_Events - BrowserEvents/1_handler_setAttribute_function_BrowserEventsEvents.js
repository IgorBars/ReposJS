/* JawaScript - 1_handler_setAttribute_function_BrowserEventsEvents              setAttribute("on<событие>", "handler()")

Обработчик может быть назначен методом setAttribute("on<событие>", "handler()").
Но такой метод установки Обработчика setAttribute не рекомендован.                      (!!!)
*/

'use strict';
alert("Start 1_handler_setAttribute_function_BrowserEventsEvents");

function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert("Кролик номер " + i);
    }
}

let input = document.querySelector('input');

input.setAttribute('onclick', 'countRabbits()');   // установим атрибут из JS

alert( input.outerHTML );   // проверим успешную установку атрибута
for (let {name, value} of input.attributes) {alert(name + ": " + value);}

alert("End");