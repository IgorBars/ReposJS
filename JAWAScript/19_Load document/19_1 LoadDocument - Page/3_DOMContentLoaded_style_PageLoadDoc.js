/* JawaScript - 3_DOMContentLoaded_style_PageLoadDoc               DOMContentLoaded и стили

Внешние таблицы стилей не затрагивают DOM, поэтому DOMContentLoaded их не ждёт.

НО здесь есть подводный камень. Если после стилей у нас есть скрипт, то этот скрипт должен дождаться, пока загрузятся стили:

<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // скрипт не выполняется, пока не загрузятся стили
  alert(getComputedStyle(document.body).marginTop);
</script>
*/

'use strict';
alert("Start 3_DOMContentLoaded_style_PageLoadDoc");


// Причина в том, что скрипту может понадобиться получить координаты или другие свойства элементов, зависящих от стилей, как в примере выше. 
// Естественно, он должен дождаться, пока стили загрузятся.

// Так как DOMContentLoaded дожидается скриптов, то теперь он так же дожидается и стилей перед ними.



alert("End");