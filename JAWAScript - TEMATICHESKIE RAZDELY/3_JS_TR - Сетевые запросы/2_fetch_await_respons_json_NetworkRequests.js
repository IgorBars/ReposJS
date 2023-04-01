/* JawaScript - 1_fetch_respons_json_NetworkRequests               fetch

Базовый синтаксис:

let promise = fetch(url, [options])
url – URL для отправки запроса.
options – дополнительные параметры: метод, заголовки и так далее.
Без options это простой GET-запрос, скачивающий содержимое по адресу url.

Во-первых, promise выполняется с объектом встроенного класса Response в качестве результата, 
как только сервер пришлёт заголовки ответа.
  На этом этапе мы можем проверить статус HTTP-запроса и определить, выполнился ли он успешно, 
  а также посмотреть заголовки, но пока без тела ответа.
  Промис завершается с ошибкой, если fetch не смог выполнить HTTP-запрос, например при ошибке сети или если нет такого сайта. 
  HTTP-статусы 404 и 500 не являются ошибкой.

  Мы можем увидеть HTTP-статус в свойствах ответа:

  status – код статуса HTTP-запроса, например 200.
  ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.

Во-вторых, для получения тела ответа нам нужно использовать дополнительный вызов метода.
Response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:
  - response.text() – читает ответ и возвращает как обычный текст,
  - response.json() – декодирует ответ в формате JSON,
  - response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
  - response.blob() – возвращает объект как Blob (бинарные данные с типом),
  - response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
  - помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. 
  Мы рассмотрим и такой пример несколько позже.

Например, получим JSON-объект с последними коммитами из репозитория на GitHub:
*/

'use strict';
alert("Start 1_fetch_respons_json_NetworkRequests");

async function getСommits() {
  let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);
  let commits = await response.json();                             // читаем ответ в формате JSON (как JS массив коммитов)
  alert(commits.length);                                           // 30
  alert(commits[0].author.login);                                  // iliakan

  for(let commit of commits) {
    alert(commit.author.login);
  }
}

getСommits();



alert("End");

/*

*/