/* JawaScript - Ex0_getUsers_NetworkRequests               

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
alert("Start Ex0_getUsers_NetworkRequests");                    
// В цикле только указьіваются переменньіе для загрузки, сама загрузка происходит после окончания цикла параллельньіми потоками
// результирующий массив results формируется Promise.all по завершению параллельньіх загрузок в массив jobs

let logins = ['iliakan', 'remy', 'no.such.users'];

async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      // Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», 
      // и получает результат.
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json(); // возвращает в let job =    (стр.27) job - переменная в окружении итерации for
        }
      },
      // Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», 
      // и получает ошибку.
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

getUsers(logins);



alert("End");