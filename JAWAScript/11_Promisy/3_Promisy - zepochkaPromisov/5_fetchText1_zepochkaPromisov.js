/* JawaScript - 5_fetchText1_zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий
*/
'use strict';

alert("Start 5_fetchText1_zepochkaPromisov");

//Открываем в браузере https://api.github.com/users 
fetch('https://api.github.com/users')
  // .then в коде ниже выполняется, когда удалённый сервер отвечает
  .then(function(response) {
    // response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text();
  })
  .then(function(text) {
    // ...и здесь содержимое полученного файла
    alert(text);// [{ "login": "Mojombo"... 
  })
  .catch(alert);// ловим ошибку (например, загрузки со своей папки)

alert("End");

