/* JawaScript - 3_errorFirstCallback_CollbackPromisy - «колбэк с первым аргументом-ошибкой» («error-first callback»).

*/
'use strict';

alert("Start 3_errorFirstCallback_CollbackPromisy");

loadScript('/my/script.js', function(error, script) {
    if (error) {
      // обрабатываем ошибку
    } else {
      // скрипт успешно загружен
    }
});

// Правила таковы:

//Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
//Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
//Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.



alert("End");

