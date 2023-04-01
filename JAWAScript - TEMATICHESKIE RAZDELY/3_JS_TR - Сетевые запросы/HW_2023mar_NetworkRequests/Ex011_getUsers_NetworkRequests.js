/* JawaScript - Ex011_getUsers_NetworkRequests               

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
alert("Start Ex011_getUsers_NetworkRequests");      // КОД  РАБОЧИЙ  ДАЖЕ БЕЗ СЕТИ


let logins = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(names) {
  let users = [];
  let user;

  for (let name of names) {
    let responsePromise =  fetch(`https://api.github.com/users/${name}`);   //alert(response.status);
    user = responsePromise.then(                // у метода then 2 аргумента-колбека (через then удобно фитьтровать по заголовкам)
                                                // (первая инструкция - для положительного результата)
      function (responsePromiseSuccess) {                   // колбек с удачно-загруженньіми заголовками
        if (responsePromiseSuccess.status != 200) {  
          alert(responsePromiseSuccess.status);             // 404
          return null;
        } else {
          return responsePromiseSuccess.json();             // при получении заголовка сразу запрос содержимого
        }
      }, 
      function (responsePromiseFail) {                      // колбек с ошибкой загрузки заголовков
        alert(responsePromiseFail); 
        return null;}                                       // ошибка/отсутствие сети  TypeError: Failed to fetch
    )
    users.push(user);
  }
  let results = await Promise.all(users);              // ожидает загрузки содержимого всех users (await проще в написании чем then)
  alert(results.length ?? null); alert(results[0]?.login ?? results[0]); alert(results[1]?.login ?? results[1]); alert(results[2]?.login ?? results[2]);  // 3, iliakan, remy, null
  return results;
}

getUsers(logins);



alert("End");