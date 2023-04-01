/* JawaScript - Ex1_3_getUsers_NetworkRequests               

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
alert("Start Ex1_4_getUsers_NetworkRequests");                        //  без условия 3)


let logins = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(names) {
  let urls = names.map(name => `https://api.github.com/users/${name}`);
  
  let requests = urls.map( url => fetch(url).then(response => response.json()) );

  Promise.all(requests)
    
    .then (users => users.map(user => alert(user?.login))); 
}

getUsers(logins);



alert("End");