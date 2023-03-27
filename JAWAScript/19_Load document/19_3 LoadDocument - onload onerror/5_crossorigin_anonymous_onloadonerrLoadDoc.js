/* JawaScript - 5_crossorigin_anonymous_onloadonerrLoadDoc               атрибут crossorigin

кросс-доменная политика (CORS)  [политика кросс-доменного доступа]

Чтобы разрешить кросс-доменный доступ, нам нужно поставить тегу <script> атрибут crossorigin, и, кроме того, 
удалённый сервер должен поставить специальные заголовки.

Существует три уровня кросс-доменного доступа:
  - Атрибут crossorigin отсутствует – доступ запрещён.
  - crossorigin="anonymous" – доступ разрешён, если сервер отвечает с заголовком Access-Control-Allow-Origin со значениями * 
      или наш домен. Браузер не отправляет авторизационную информацию и куки на удалённый сервер.
  - crossorigin="use-credentials" – доступ разрешён, если сервер отвечает с заголовками Access-Control-Allow-Origin со значением 
      наш домен и Access-Control-Allow-Credentials: true. Браузер отправляет авторизационную информацию и куки на удалённый сервер.

<script>
  window.onerror = function(message, url, line, col, errorObj) {
    alert(`${message}\n${url}, ${line}:${col}`);
  };
</script>
<script crossorigin="anonymous" src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"></script>
*/

'use strict';
alert("Start 5_crossorigin_anonymous_onloadonerrLoadDoc");


    
                                            // Мы видим нормальный отчёт об ошибке:

                                            // Uncaught ReferenceError: noSuchFunction is not defined
                                            // https://javascript.info/article/onload-onerror/crossorigin/error.js, 1:1





alert("End");