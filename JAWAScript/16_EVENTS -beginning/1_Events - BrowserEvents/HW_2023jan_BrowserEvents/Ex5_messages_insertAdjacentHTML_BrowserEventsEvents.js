/* JawaScript - Ex5_messages_insertAdjacentHTML_BrowserEventsEvents               

Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
*/

'use strict';
alert("Start Ex5_messages_insertAdjacentHTML_BrowserEventsEvents");


let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  // кнопка становится первым потомком плитки (pane)
  pane.firstChild.onclick = () => pane.remove();        // вместе с кнопкой
}


alert("End");