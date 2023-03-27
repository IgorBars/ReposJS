/* JawaScript - 2_json_tryCatchError

Если json некорректен, JSON.parse генерирует ошибку, то есть скрипт «падает».
*/
'use strict';

alert("Start 2_json_tryCatchError");

//Используем JSON
let json = '{"name":"John", "age": 30}'; // данные с сервера

let user = JSON.parse(json); // преобразовали текстовое представление в JS-объект

// теперь user - объект со свойствами из строки
alert( user.name ); // John
alert( user.age );  // 30



//обрабатываем некорректный JSON
json = "{ некорректный JSON }";

try {

  let user = JSON.parse(json); // <-- тут возникает ошибка...
  alert( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}



alert("End");

