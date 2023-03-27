/* JawaScript - 3_eventObject_BrowserEventsEvents               Object: event

Когда происходит событие, браузер создаёт объект события, 
записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

В зависимости от типа события в об'ьект собьітия передается ряд соответствующих свойств.

<input id="elem" type="button" value="Нажми меня"/>
*/

'use strict';
alert("Start 3_eventObject_BrowserEventsEvents");


let elem = document.getElementById('elem');

elem.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.currentTarget);
    alert("Координаты: " + event.clientX + ":" + event.clientY);
};

// event.currentTarget
// - Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у this, 
// но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект в качестве this, 
// то мы можем получить элемент из event.currentTarget.

// Отличия от this (=event.currentTarget):
//      - event.target – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
//      - this – это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.



// event.clientX / event.clientY
// - Координаты курсора в момент клика относительно окна, для событий мыши.
alert("End");