/* JawaScript - 1_window_open_OpenWindFrames               

Всплывающее окно («попап» – от англ. Popup window) 

В прошлом злонамеренные сайты заваливали посетителей всплывающими окнами. 
Такие страницы могли открывать сотни попапов с рекламой.
Поэтому теперь большинство браузеров пытаются заблокировать всплывающие окна, чтобы защитить пользователя.

Всплывающее окно блокируется в том случае, если вызов window.open произошёл НЕ В РЕЗУЛЬТАТЕ действия посетителя 
(например, события onclick).

<button id="button" data-tooltip="but">Нажми на мне!</button>
*/

'use strict';
alert("Start 1_window_open_OpenWindFrames");



let button = document.getElementById('button');


// window.open('https://javascript.info');          // попап заблокирован


button.onclick = () => {                            // попап будет показан
  window.open('https://javascript.info');
};


alert("End");