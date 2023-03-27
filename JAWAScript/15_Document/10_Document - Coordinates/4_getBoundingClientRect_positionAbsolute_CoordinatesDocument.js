/* JawaScript - 4_getBoundingClientRect_positionAbsolute_CoordinatesDocument       getBoundingClientRect,  position:absolute

Чаще всего нам нужны координаты для позиционирования чего-либо.

Чтобы показать что-то около нужного элемента, мы можем вызвать getBoundingClientRect.

Координаты относительно документа
В такой системе координат отсчёт ведётся от левого верхнего угла документа, не окна.

В CSS координаты относительно документа – свойству position:absolute на самом верхнем уровне вложенности.

Не существует стандартного метода, который возвращал бы координаты элемента относительно документа, но мы можем написать его сами.

Две системы координат связаны следующими формулами:

  - pageY = clientY + высота вертикально прокрученной части документа.
  - pageX = clientX + ширина горизонтально прокрученной части документа.


    // получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
*/

'use strict';
alert("Start 4_getBoundingClientRect_positionAbsolute_CoordinatesDocument");


let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html) {
  // создаём элемент, который будет содержать сообщение
  let message = document.createElement('div');
  // для стилей лучше было бы использовать css-класс здесь
  message.style.cssText = "position:absolute; color: red; background: yellow; width: 200px"; // position:absolute (!!!)

  // устанавливаем координаты элементу, не забываем про "px"!
  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}

// Использование:
// добавим сообщение на страницу на 5 секунд
let message = createMessageUnder(elem, 'Hello, world!');
document.body.append(message);
setTimeout(() => message.remove(), 5000);


// сообщение позиционируется с помощью position:fixed, поэтому оно остаётся всегда на том же самом месте в окне при прокрутке страницы.

alert("End");