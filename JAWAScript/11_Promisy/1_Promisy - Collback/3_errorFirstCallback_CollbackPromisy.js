/* JawaScript - 3_errorFirstCallback_CollbackPromisy - «колбэк с первым аргументом-ошибкой» («error-first callback»).

Как правило, в callback первьім аргументом идет об'ьект ошибки.

Правила таковы:
  Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
  Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
  
Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.
*/
'use strict';

alert("Start 3_errorFirstCallback_CollbackPromisy");


function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

  document.head.append(script);
}



loadScript('/my/script.js', function(error, script) {
    if (error) {
      // обрабатываем ошибку
    } else {
      // скрипт успешно загружен
    }
});




alert("End");

