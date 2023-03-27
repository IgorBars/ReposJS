/* JawaScript - 2_addEventListener_BrowserEventsEvents               elem.addEventListener("event", handler1)

Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента.
Синтаксис добавления обработчика:

element.addEventListener(event, handler, [options]);
    - event    - Имя события, например "click".

    - handler    - Ссылка на функцию-обработчик.

    - options    - Дополнительный объект со свойствами.


<input id="elem" type="button" value="Нажми меня"/>
*/

'use strict';
alert("Start 2_addEventListener_BrowserEventsEvents");


function handler1() {
    alert('Спасибо!');
};

function handler2() {
    alert('Спасибо ещё раз!');
}

let elem = document.getElementById('elem');

elem.onclick = () => alert("Привет");

elem.addEventListener("click", handler1); // Спасибо!

elem.addEventListener("click", handler2); // Спасибо ещё раз!


alert("End");