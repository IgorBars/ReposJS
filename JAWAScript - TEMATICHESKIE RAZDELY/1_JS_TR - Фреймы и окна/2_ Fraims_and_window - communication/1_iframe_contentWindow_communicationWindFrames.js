/* JawaScript - 1_iframe_contentWindow_communicationWindFrames               

Внутри <iframe> находится по сути отдельное окно с собственными объектами document и window.

Мы можем обращаться к ним, используя свойства:

  - iframe.contentWindow ссылка на объект window внутри <iframe>.
  - iframe.contentDocument – ссылка на объект document внутри <iframe>, короткая запись для iframe.contentWindow.document.

Когда мы обращаемся к встроенному в ифрейм окну, браузер проверяет, имеет ли ифрейм тот же источник. Если это не так, 
тогда доступ будет запрещён (разрешена лишь запись в location, это исключение).

<iframe src="http://192.168.1.1/" id="iframe"></iframe>
*/

'use strict';
alert("Start 1_iframe_contentWindow_communicationWindFrames");



let iframe = document.getElementById('iframe');

iframe.onload = function() {                                  // iframe: блокировка загрузки (Политика «Одинакового источника»)
  // можно получить ссылку на внутренний window
  let iframeWindow = iframe.contentWindow; // OK
  try {
    // ...но не на document внутри него
    let doc = iframe.contentDocument; // ОШИБКА
  } catch(e) {
    alert(e); // Security Error
  }

  // также мы не можем прочитать URL страницы в ифрейме
  try {
    // Нельзя читать из объекта Location
    let href = iframe.contentWindow.location.href; // ОШИБКА
  } catch(e) {
    alert(e); // Security Error
  }

  // ...но можно писать в него (и загрузить что-то другое в ифрейм)!
  iframe.contentWindow.location = '/'; // OK

  iframe.onload = null; // уберём обработчик, чтобы не срабатывал после изменения location
};



alert("End");