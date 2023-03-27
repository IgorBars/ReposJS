/* JawaScript - 2_loadScriptCollback3_CollbackPromisy - асинхронное программирование с использованием колбэков.
                                                      .js -файл на PC
Вставляємо посилання .js-файлу, бо loadScript створює тег <script> !!!
( гарно буде викороистати .js-файл із створенням тегів <img>, <a> )

Виведемо alert("new Date():  " + now), now - змінна з завантаженого файлу .js
*/
'use strict';
alert("Start 2_loadScriptCollback3_CollbackPromisy");



function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback();
  document.head.append(script);
}

loadScript('E:/JAWASCRIPT/JS - Visual Studio/JAWAScript/5_Data/Date - Date&Time/_Time_DateDateTime.js', () => alert(now));



// ДЛЯ js - файлу НА КОМПІ (робота у реальному часі, без затримки):
// можно убрать об'ьект script из параметра callback. Сохраняется доступ в колбеке к script
alert("End");