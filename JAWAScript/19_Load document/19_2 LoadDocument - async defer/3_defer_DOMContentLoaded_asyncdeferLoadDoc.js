/* JawaScript - 3_defer_DOMContentLoaded_asyncdeferLoadDoc               defer и DOMContentLoaded

Скрипты с defer никогда не блокируют страницу.
Скрипты с defer всегда выполняются, когда дерево DOM готово, НО ДО СОБЬІТИЯ DOMContentLoaded 
(т.е ведут себя как обьічньій скрипт внизу страницьі).

<p>...содержимое до скрипта...</p>
<script>
  document.addEventListener('DOMContentLoaded', () => alert("Дерево DOM готово после скрипта с 'defer'!"));
</script>
<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script> // (2)
<p>...содержимое после скрипта...</p>
*/

'use strict';
alert("Start 3_defer_DOMContentLoaded_asyncdeferLoadDoc");


// Содержимое страницы отобразится мгновенно.
// Событие DOMContentLoaded подождёт отложенный скрипт. Оно будет сгенерировано, только когда скрипт (2) будет загружен и выполнен.




alert("End");