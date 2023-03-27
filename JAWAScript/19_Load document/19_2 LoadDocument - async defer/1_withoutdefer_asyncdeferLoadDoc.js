/* JawaScript - 1_withoutdefer_asyncdeferLoadDoc               без defer

Проблемьі размещения скрипта вьіше на странице:
  1. Скрипты не видят DOM-элементы ниже себя, поэтому к ним нельзя добавить обработчики и т.д.
  2. Если вверху страницы объёмный скрипт, он «блокирует» страницу. Пользователи не видят содержимое страницы, 
      пока он не загрузится и не запустится. (см. єту ситуацию ниже)

<p>...содержимое перед скриптом...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- Это не отобразится, пока скрипт не загрузится -->
<p>...содержимое после скрипта...</p>
*/

'use strict';
alert("Start 1_withoutdefer_asyncdeferLoadDoc");







alert("End");