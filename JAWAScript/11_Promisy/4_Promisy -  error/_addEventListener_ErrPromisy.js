/* JawaScript - _addEventListener_ErrPromisy
                                Необработанные ошибки промисов
В браузере мы можем поймать глобальньіе ошибки промисов, 
сгенерированньіе JavaScript-движком, используя событие unhandledrejection
*/
'use strict';

alert("Start _addEventListener_ErrPromisy");             // СМОТРЕТЬ В КОНСОЛИ ИНСТРУМЕНТОВ !!!

// new Promise(function() {
//   noSuchFunction();    // Ошибка (нет такой функции)
// })
//   .then(() => {
//                        // обработчики .then, один или более
//   });                  // нет обработчика ошибок, код "падает"



window.addEventListener('unhandledrejection', function(event) {   // Это событие является частью стандарта HTML.
  // объект события имеет два специальных свойства:
  alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
  alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function() {
  throw new Error("Ошибка!");
}); // нет обработчика ошибок, но JavaScript-движок отслеживает такие ситуации и генерирует в этом случае глобальную ошибку

alert("End");

