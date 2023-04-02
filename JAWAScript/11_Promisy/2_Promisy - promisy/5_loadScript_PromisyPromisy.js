/* JawaScript - 5_loadScript_PromisyPromisy
  Вариант с колбеками:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}
*/
'use strict';

alert("Start 5_loadScript_PromisyPromisy");

function loadScript(src) {
  return new Promise(function(resolve, reject) {            //resolve -"успешный" колбек (зарегистрированное имя)
    let script = document.createElement('script');
    script.src = src;
    //Обработчики onload/onerror отслеживают процесс загрузки
    // и при ее окончании запускают  (= ()=>)  что нам нужно
    // например колбеки resolve и reject
    script.onload = () => resolve(script);                  // запускаем "успешный" колбек => "изменит сост promise => script"
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}


let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodas.js");    // ошибка загрузки
//ждущим обработчиком .then "ловим" момент возвращения return-ом объекта промиса
// - завершенного промиса с состоянием-значением script
promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

// 2-й обработчик .then:
promise.then(script => alert(`${script.src} загружен(2)`));  // [object HTMLScriptElement]           (при ошибке загрузки ложньій script)

// 3-й обработчик .then:
promise.then(script => alert(`${script.src} загружен(3)`))

  // then без new Promise - синхронньій код, передает результат дальше, но не ждет асинхронньіх вьіполнений
  .then(script => setTimeout(() => alert(`${script.src} загружен(4)`), 3000))         //  НЕ СРАБОТАЕТ !
  .then(script => alert(`${script.src} загружен(5)`));                                // undefined загружен(5)


// По сути в promise хранится об'ьект, переданньій колбеком resolve и содержащий загруженньій скрипт (createElement => HTMLScriptElement)
// или об'ьект ошибки, созданной и переданной колбеком промимса   reject
alert("End");

