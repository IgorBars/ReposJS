/* JawaScript - Ex5_messages_createFunc_BrowserEventsEvents               

Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
*/

'use strict';
alert("Start Ex5_messages_createFunc_BrowserEventsEvents");


let panes = document.querySelectorAll('.pane');

for(let pane of panes) {

  let button = document.createElement('div');
  button.classList = 'remove-button';
  button.innerHTML = '[x]';
  pane.prepend(button); // кнопка становится первым потомком плитки (pane)
  pane.firstChild.onclick = () => pane.remove();        // вместе с кнопкой
}


alert("End");