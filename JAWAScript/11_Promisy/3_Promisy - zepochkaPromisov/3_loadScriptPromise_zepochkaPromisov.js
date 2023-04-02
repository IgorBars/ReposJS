/* JawaScript - 3_loadScriptPromise_zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий
Посмотрим на примере промисифицированной функции loadScript
*/
'use strict';
alert("Start 3_loadScriptPromise_zepochkaPromisov");
//    Загрузка скриптов со своей дочерней папки /article/promise-chaining
//   (чтобы проверить загруженные ф-ии) получается при указании полного пути в ссьілке) 

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script'); 
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта:  ${src}`));

    document.head.append(script);
  });
}


loadScript("E:/JAWASCRIPT/JS - Visual Studio/JAWAScript/11_Promisy/3_Promisy - zepochkaPromisov/article/promise-chaining/one.js")

  .then(function(script) {
    return loadScript("E:/JAWASCRIPT/JS - Visual Studio/JAWAScript/11_Promisy/3_Promisy - zepochkaPromisov/article/promise-chaining/two.js");
  }) 
  .then(function(script) {
    return loadScript("E:/JAWASCRIPT/JS - Visual Studio/JAWAScript/11_Promisy/3_Promisy - zepochkaPromisov/article/promise-chaining/three.js");
  })
  .then(function(script) {
    // скрипты загружены, мы можем использовать объявленные в них функции
    one();
    two();
    three();
});

// Здесь каждый вызов loadScript возвращает промис, и следующий обработчик в .then срабатывает, 
//только когда этот промис завершается. Затем инициируется загрузка следующего скрипта и так далее. 
//Таким образом, скрипты загружаются один за другим.




alert("End");

