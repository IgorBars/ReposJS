/* JawaScript - 6_fetch_await_respons_headers_NeexttworkRequests               response.headers

Заголовки ответа хранятся в похожем на Map объекте response.headers.

Это не совсем Map, но мы можем использовать такие же методы, как с Map, чтобы получить заголовок по его имени или перебрать заголовки в цикле:
*/

'use strict';
alert("Start 6_fetch_await_respons_headers_NeexttworkRequests");           //  



(async () => {
  let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

  // получить один заголовок
  alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

  // перебрать все заголовки
  for (let [key, value] of response.headers) {
    alert(`${key} = ${value}`);
  }
})();



alert("End");

/*

*/

