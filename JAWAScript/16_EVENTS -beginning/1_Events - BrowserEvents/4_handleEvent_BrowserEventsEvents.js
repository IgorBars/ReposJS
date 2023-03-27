/* JawaScript - 4_handleEvent_BrowserEventsEvents               handleEvent

Мы можем назначить обработчиком не только функцию, но и объект при помощи addEventListener. 
В этом случае, когда происходит событие, вызывается метод объекта handleEvent.

<button id="elem">Нажми меня</button>
*/

'use strict';
alert("Start 4_handleEvent_BrowserEventsEvents");


let elem = document.getElementById('elem');
elem.addEventListener('click', {
    handleEvent(event) {  // обработчик-метод-объекта
      alert(event.type + " на " + event.currentTarget);
      alert("Координаты: " + event.clientX + ":" + event.clientY);
    }
});


alert("End");