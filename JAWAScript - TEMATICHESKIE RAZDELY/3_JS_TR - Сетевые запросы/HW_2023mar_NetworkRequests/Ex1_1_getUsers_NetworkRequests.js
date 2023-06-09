/* JawaScript - Ex1_1_getUsers_NetworkRequests               

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
alert("Start Ex1_1_getUsers_NetworkRequests");


let logins = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(name) {
  let users = [];
  let url = `https://api.github.com/users/${name}`;
  let response = await fetch(url);
  let user = await response.json();                             // читаем ответ в формате JSON (как JS массив коммитов)

  users.push(user);
  alert(users[0].login);
}

getUsers(logins[1]);



alert("End");