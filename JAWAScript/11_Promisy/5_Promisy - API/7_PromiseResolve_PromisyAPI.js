/* JawaScript - _PromisyAPI
    Метод Promise.resolve(value) создаёт успешно выполненный промис 
с результатом value. Например - Promise.resolve(cache.get(url))

    То же самое, что:
let promise = new Promise(resolve => resolve(value));
Этот метод используют для совместимости: когда ожидается, что функция возвратит именно промис.
*/
'use strict';

alert("Start PromiseResolve_PromisyAPI");

let cache = new Map();

function loadCached(url) { // ф-я кеширования страниц по url
  if (cache.has(url)) {                     // если url как ключ в коллекции Map имеется
    return Promise.resolve(cache.get(url)); // (*) , то достаём страницу из кеша и делаем из неё промис, (!!!)
  }                                         // для того, чтобы возвращаемое значение всегда было промисом

  return fetch(url)                         // если url как ключа в коллекции Map нет, делаем первичньій fetch-запрос
    .then(response => response.text())      // вторичньій response.text-запрос
    .then(text => {
      cache.set(url,text); // добавляем в коллекцию Map содержимое-страницу по ключу url
      return text;
    });
}
// Теперь мы можем асинхронно обработать результат - писать loadCached(url).then(…), 
//  потому что функция loadCached всегда возвращает промис (благодаря стр 17).

// loadCached('https://api.github.com/users/iliakan');
loadCached('https://api.github.com/users/iliakan')
  .then(text => alert("По запросу fetch: " + text));
loadCached('https://api.github.com/users/iliakan')
.then(text => alert('Из коллекции cache: ' + text));

alert("End");

