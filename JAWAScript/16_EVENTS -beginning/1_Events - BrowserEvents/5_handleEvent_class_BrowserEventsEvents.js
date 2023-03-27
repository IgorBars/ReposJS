/* JawaScript - 5_handleEvent_class_BrowserEventsEvents               handleEvent in class

Мы можем назначить обработчиком не только функцию, но и объект при помощи addEventListener. 
В этом случае, когда происходит событие, вызывается метод объекта handleEvent.

Мы также можем использовать класс для этого.

<button id="elem">Нажми меня</button>
*/

'use strict';
alert("Start 5_handleEvent_class_BrowserEventsEvents");

let elem = document.getElementById('elem');

class Menu {
    handleEvent(event) {        // метод-класса - универсальньій обработчик (строгое название handleEvent)
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Нажата кнопка мыши";
          break;
        case 'mouseup':      // логика обработки собьітия mouseup
          elem.innerHTML += "...и отжата.";
          break;
      }
    }
}

let menu = new Menu();        // создаем об'ект с универсальньім обработчиком на собіьтия mousedown, mouseup

// повесим на elem обработчик собьітия mousedown (зная, что забили в класс его обработку)
elem.addEventListener('mousedown', menu);   // Нажата кнопка мыши

// повесим на elem обработчик собьітия mouseup (зная, что забили в класс его обработку)
elem.addEventListener('mouseup', menu);     // Нажата кнопка мыши...и отжата.


alert("End");