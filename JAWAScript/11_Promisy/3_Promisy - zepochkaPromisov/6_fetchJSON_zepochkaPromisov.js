/* JawaScript - 6_fetchJSON_zepochkaPromisov
https://api.github.com/users  -  получаем имя по логину
 // "login": "mojombo"  / "login": "defunkt"
*/
'use strict';

alert("Start 6_fetchJSON_zepochkaPromisov");



// то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
fetch('https://api.github.com/users/iliakan')
  .then(response => response.json())  // хочемо працювати, як з об'єктом, отже - response.json()
  .then(user => alert(user.name));    // Ilya Kantor, получили имя пользователя


fetch('https://api.github.com/users/mojombo')
  .then(response => response.json())
  .then(user => alert(user.name));    // Tom Preston-Werner, получили имя пользователя


fetch('https://api.github.com/users/defunkt')
  .then(response => response.json())
  .then(user => alert(user.name));    // Chris Wanstrath, получили имя пользователя




alert("End");

