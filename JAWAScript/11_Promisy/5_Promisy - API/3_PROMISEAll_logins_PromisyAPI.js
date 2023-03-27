/* JawaScript - 3_PROMISEAll_logins_PromisyAPI
Получение одновременно информации о нескольких пользователях GitHub по их логинам из массива
*/
'use strict';

alert("Start 3_PROMISEAll_logins_PromisyAPI"); // по Логинам
// https://api.github.com/users/iliakan - объект для логина iliakan
// https://api.github.com/users/remy



let names = ['iliakan', 'remy', 'jeresig', 'mojombo', 'defunkt']; // массив известных логинов

// На массив первичньіх (синхронньіх) fetch-запросов возвращается массив асинхронньіх response-ответов промисов:
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Принимаем промисьі response-ответьі именно многопоточньім Promise.all:
Promise.all(requests) // Именно Promise.all, как параллельньій многопоточньій обработчик, может принять все "одновременньіе" промисьі
    // все промисы успешно завершены в Promise.all и возвращаются промисом массива responses
  .then(responses => {

    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }

    return responses; // повертаємо проміс массива responses для подальшої обробки у then
  })

  // Из массива responses формируем (синхронньіе) запросьі response.json(), на которьіе возвращаются асинхронньіе промисьі 
  //                                                                                      с интересуемьіми значениями JSON.
  // Возвращающиеся (на одновременньій запрос) с разньіми задержками json-промисьі принимаются только многопоточньім Promise.all:
  .then(responses => Promise.all(responses.map(r => r.json()))
  )

  // все JSON-ответы обработаны, возвращается массив с результатами - присвоим ему имя users
  .then(users => users.forEach(user => alert(user.name +": " + "'"+ user.login +"'"))
  );


  
alert("End");

