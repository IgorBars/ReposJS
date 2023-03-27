/* JawaScript - 3_getBoundingClientRect_positionFixed_CoordinatesDocument       getBoundingClientRect,  position:fixed

Чаще всего нам нужны координаты для позиционирования чего-либо.

Чтобы показать что-то около нужного элемента, мы можем вызвать getBoundingClientRect, 
чтобы получить его координаты элемента, а затем использовать CSS-свойство position:fixed вместе с left/top (или right/bottom).


В CSS координаты относительно окна браузера соответствуют свойству position:fixed, 
а координаты относительно документа – свойству position:absolute на самом верхнем уровне вложенности.

<style>
    #example {
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
<body>
                                ...
*/

'use strict';
alert("Start 3_getBoundingClientRect_positionFixed_CoordinatesDocument");


let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html) {
  // создаём элемент, который будет содержать сообщение
  let message = document.createElement('div');
  // для стилей лучше было бы использовать css-класс здесь
  message.style.cssText = "position:fixed; color: red; background: yellow; width: 200px"; // position:fixed (!!!)

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