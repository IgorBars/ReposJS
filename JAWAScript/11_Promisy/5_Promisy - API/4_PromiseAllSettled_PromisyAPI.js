/* JawaScript - 4_PromiseAllSettled_PromisyAPI
Метод Promise.allSettled всегда ждёт завершения всех промисов, вне зависимости от ошибок
 В массиве результатов будет

{status:"fulfilled", value:результат} для успешных завершений, => {status:"fulfilled", value:status}
{status:"rejected", reason:ошибка} для ошибок.
*/
'use strict';

alert("Start 4_PromiseAllSettled_PromisyAPI"); // по Логинам
// https://api.github.com/users/iliakan - объект для логина iliakan
// https://api.github.com/users/remy

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {  // для кожного з масиву результатів

      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`); // https://api.github.com/users/iliakan: 200 
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);  // https://no-such-url: TypeError: Failed to fetch
      }
    });
  });

// Массив results в строке (*) будет таким:

// [
//   {status: 'fulfilled', value: ...объект ответа...},   (где ...объект ответа... - первичньій ответ fetch)
//   {status: 'fulfilled', value: ...объект ответа...},   (...объект ответа... имеет св-во status (напр, 200))
//   {status: 'rejected', reason: ...объект ошибки...}
// ]
// где value/reason - значение промиса

alert("End");

