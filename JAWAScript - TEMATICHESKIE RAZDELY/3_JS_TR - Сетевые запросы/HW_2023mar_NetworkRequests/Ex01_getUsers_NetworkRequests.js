/* JawaScript - Ex01_getUsers_NetworkRequests               

Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, 
запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке:
https://api.github.com/users/USERNAME

Важные детали:
    1. На каждого пользователя должен приходиться один запрос fetch.
    2. Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
    3. Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, 
        то функция должна возвращать null в массиве результатов.
*/

'use strict';
alert("Start Ex01_getUsers_NetworkRequests");      //  ОЖИДАНИЕ await ОЧЕРЕДНОГО ЗАПРОСА fetch+json() НА КАЖДОЙ ИТЕРАЦИИ FOR


let logins = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(names) {
  let users = [];
  let user;

  for (let name of names) {
    let response = await fetch(`https://api.github.com/users/${name}`);   //alert(response.status);

    if (response.status != 200) {
      user = null;
    } else {
      user = await response.json();
    }
    users.push(user);
  }
  alert(users.length ?? null); alert(users[0]?.login ?? users[0]); alert(users[1]?.login ?? users[1]); alert(users[2]?.login ?? users[2]);  // 3, iliakan, remy, null
  return users;
}

getUsers(logins);



alert("End");