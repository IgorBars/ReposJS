/* JawaScript - 2_loadScriptCollback_CollbackPromisy  - асинхронное программирование с использованием колбэков.
  callback - єто тот триггер, которьій сработает в момент окончания загрузки.
*/
'use strict';

alert("Start 2_loadScriptCollback_CollbackPromisy");
// loadScript (рабочая "затяжная" функция с колбеком в аргументах) загружает скрипт с интернета


function loadScript(src, callback) {
  let script = document.createElement('script');// создаем тег <script>
  script.src = src;                             // добавляем в него св-во ссьілку из параметров
  script.onload = () => callback(script);       //при удачн загрузке вызываем колбек  (тема: https://learn.javascript.ru/onload-onerror)
  document.head.append(script);
}

// распишем callback прямо в параметрах loadScript:
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, скрипт ${script.src} загрузился`);
  alert( _ ); // функция, объявленная в загруженном скрипте
});


// Или можно создать именованньій callback
function call(scpt) {
  alert(`Здорово, скрипт ${scpt.src} загрузился`);
  alert( _ );
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', call);


alert("End");

// Имя функции может состоять из одного символа подчёркивания. То есть _() - это функция. 
// Но внутри алерта она не вызывается, а выводится её содержимое (код, содержащийся в функции).