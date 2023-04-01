/* JawaScript - Ex1_2_getUsers_NetworkRequests               

Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, 
запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке:
https://api.github.com/users/USERNAME

Важные детали:
    1. На каждого пользователя должен приходиться один запрос fetch.
    2. Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
    3. Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, 
        то функция должна возвращать null в массиве результатов.

                                                  РАЗМИНОЧНОЕ РЕШЕНИЕ
*/

'use strict';
alert("Start Ex1_2_getUsers_NetworkRequests");       // без условия 3)


let logins = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(names) {
  let url = 'https://api.github.com/users/';
  Promise.all([
    fetch(`${url}${names[0]}`).then(response => response.json()),
    fetch(`${url}${names[1]}`).then(response => response.json()),
    fetch(`${url}${names[2]}`).then(response => response.json())
  ])
    .then( users => {alert(users[0].login); alert(users[1].login); alert(users[2].login);} ); //  iliakan  remy undefined
    // .then( users => alert(users[0].login));       // iliakan
}

getUsers(logins);



alert("End");