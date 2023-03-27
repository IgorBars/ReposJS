/* JawaScript - _PromisyErr
Ошибка в setTimeout
Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
*/
'use strict';

alert("Start _PromisyErr");



new Promise(function(resolve, reject) { // Закоментировать для работьі второго промиса
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
}).catch(alert);
// .catch не вьіполнится, т.к. ошибка асинхронна, но не обрабатьівается промисом/колбеками(resolve, reject)



// Для обработки ошибки либо код должен бьіть синхронньім, либо ошибка обрабатьіваться колбеком reject:
new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("Whoops!"));
    }, 1000);
}).catch(alert);




alert("End");

