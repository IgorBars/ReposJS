/* JawaScript - Ex5_messages_create_BrowserEventsEvents               

Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
*/

'use strict';
alert("Start Ex5_messages_create_BrowserEventsEvents");


let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  createBut();
  pane.firstChild.onclick = () => pane.hidden = true;        // вместе с кнопкой
}

function createBut() {
  let button = document.createElement('div');
  button.classList = 'remove-button';
  button.innerHTML = '[x]';
  pane.prepend(button); // кнопка становится первым потомком плитки (pane)
}

alert("End");