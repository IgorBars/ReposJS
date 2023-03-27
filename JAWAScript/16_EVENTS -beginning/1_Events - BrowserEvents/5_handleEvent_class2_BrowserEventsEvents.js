/* JawaScript - 5_handleEvent_class2_BrowserEventsEvents               handleEvent => handler1, handler2 ...

Мы можем назначить обработчиком не только функцию, но и объект при помощи addEventListener. 
В этом случае, когда происходит событие, вызывается метод объекта handleEvent.

Мы также можем использовать класс для этого.

Метод handleEvent не обязательно должен выполнять всю работу сам. Он может вызывать другие методы, 
которые заточены под обработку конкретных типов событий.

<button id="elem">Нажми меня</button>
*/

'use strict';
alert("Start 5_handleEvent_class2_BrowserEventsEvents");

let elem = document.getElementById('elem');

class Menu {
    handleEvent(event) {                      // обработчик-метод-класса: вьізьівает соответствующий собьітию метод-обработчик
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {                           // даем название, которое будет формироваться в  handleEvent
      elem.innerHTML = "Кнопка мыши нажата";
    }

    onMouseup() {                             // даем название, которое будет формироваться в  handleEvent
      elem.innerHTML += "...и отжата.";
    }
}
// Теперь обработка событий разделена по методам, что упрощает поддержку кода.

let menu = new Menu();

elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);


alert("End");