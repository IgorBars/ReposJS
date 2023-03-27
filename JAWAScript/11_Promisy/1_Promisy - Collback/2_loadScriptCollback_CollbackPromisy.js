/* JawaScript - 2_loadScriptCollback_CollbackPromisy  - асинхронное программирование с использованием колбэков.
*/
'use strict';

alert("Start 2_loadScriptCollback_CollbackPromisy");
// loadScript загружает скрипт с интернета

//рабочая "затяжная" функция с колбеком callback

function loadScript(src, callback) {
  let script = document.createElement('script');// создаем тег <script>
  script.src = src;                             // добавляем в его св-во ссьілку из параметров
  script.onload = () => callback(script);       //при удачн загрузке вызываем колбек  (тема: https://learn.javascript.ru/onload-onerror)
  document.head.append(script);
}

// распишем callback прямо в параметрах loadScript:

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, скрипт ${script.src} загрузился`);
  alert( _ ); // функция, объявленная в загруженном скрипте
});


alert("End");

