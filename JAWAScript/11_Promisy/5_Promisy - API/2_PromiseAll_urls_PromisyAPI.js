/* JawaScript - 2_PromiseAll_urls_PromisyAPI
Часто применяемый трюк – пропустить массив данных через map-функцию, которая для каждого элемента создаст задачу-промис, 
и затем обернуть получившийся массив в параллельньій обработчик Promise.all.
*/
'use strict';

alert("Start 2_PromiseAll_urls_PromisyAPI");

// alert( fetch('https://api.github.com/users/iliakan') );  // [object Promise]

// fetch('https://api.github.com/users/iliakan')
//   .then(response => alert(`fetch: ${response.url}: ${response.status}`)
//   );

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// Посьілаем 3 первичньіх fetch-запроса, получаем массив промисов, ожидающих асинхронньіе response-ответьі:
let requests = urls.map(url => fetch(url)); //массив заполняется с разньіми задержками response-ответов на fetch-запросьі
// alert(requests);  // [object Promise],[object Promise],[object Promise] - вьіполненньіе промисьі

// Именно Promise.all, как параллельньій многопоточньій асинхронньій обработчик, сможет обработать выполнение всех 
//  промисов (response-ответов с разньіми задержками) в строке 22
Promise.all(requests) // возвращает промис массива результатов (ожидает заполнения requests response-ответами (в роли сборщика промисов))
  // теперь однопоточньім then обработаем промис массива результатов
  .then(responses => responses.forEach(
    response => {alert(`${response.url}: ${response.status}`)}
  ));                       // если далее не обрабатьіваем, значит єто последний then



alert("End");

