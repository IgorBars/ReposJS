/* JawaScript - 6_appendscript_asyncdeferLoadDoc               Динамически загружаемые скрипты

Мы можем также добавить скрипт и динамически, с помощью JavaScript:

  let script = document.createElement('script');
  script.src = "/article/script-async-defer/long.js";
  document.body.append(script); // (*)

Скрипт начнёт загружаться, как только он будет добавлен в документ (*).

Динамически загружаемые скрипты по умолчанию ведут себя как «async».

То есть:
  Они никого не ждут, и их никто не ждёт.
  Скрипт, который загружается первым – запускается первым (в порядке загрузки). 
  (загрузился из сети первьім - запустился в браузере первьім)
*/

'use strict';
alert("Start 6_appendscript_asyncdeferLoadDoc");



// Вьівод - использовать для загружаемьіх страниц "безбашенньіе" динамические и с атрибутом async шрифтьі можно лишь с обработчиками 
// (дождавшись загрузки DOM)



alert("End");
