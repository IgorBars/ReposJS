/* JawaScript - 5_FETCHTEXT_zepochkaPromisov

*/
'use strict';
alert("Start 5_FETCHTEXT_zepochkaPromisov");
// Загрузка со своей дочерней папки /article/promise-chaining/user.json не получается (???) - fetch не работает локально
// fetch('E:\JAWASCRIPT\JS - Visual Studio\JAWAScript\11_Promisy\3_Promisy - zepochkaPromisov\article\promise-chaining\user.js') // ??



// Запрашиваем user.json ( на https://api.github.com/users)
fetch('https://api.github.com/users/iliakan')               // На первичньій fetch-запрос
                                                            // возвращается промис, ожидающий response-ответ
  // .then в коде ниже выполняется, когда удалённый сервер отвечает на 1-й запрос fetch (присьілает response-ответ)

  .then(function(response) {                                // ожидаем response-ответ (заголовки)
    // метод-запрос response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text();                               // вторичньій response.text-запрос                                 
  })                                                      // возвращаем промис, ожидающий текст
    // .then в коде ниже выполняется, когда удалённый сервер отвечает на 2-й запрос response.text() (присьілает text-ответ)

  .then(function(text) {                                   // ожидаем текст-ответ
    // ...и здесь читабельное содержимое полученного файла 
    // благодаря применению метода-запроса response.text()
    alert(text); // {"login": "iliakan", ...
  })
  .catch(error => alert(error));//( если ошибка загрузки - TypeError: Failed to fetchTypeError: Failed to fetch)


alert("End");

