/* JawaScript - 2_loadScriptCollback1_CollbackPromisy  - асинхронное программирование с использованием колбэков.
 !!! loadScript (рабочая "затяжная" функция с колбеком callback) загружает скрипт с интернета
*/
'use strict';

alert("Start 2_loadScriptCollback1_CollbackPromisy");



function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => (
  alert(`Здорово, скрипт ${script.src} загрузился`),
  alert( _ )
));

// попьітка убрать об'ьект script из параметра callback исключает доступ в колбеке к script !!!
alert("End");

