/* JawaScript - 2_DOMContentLoaded_script_PageLoadDoc               DOMContentLoaded и скриптьі

Когда браузер обрабатывает HTML-документ и встречает тег <script>, он должен выполнить его перед тем, как продолжить строить DOM.
То же самое происходит и с внешними скриптами <script src="..."></script>: браузер должен подождать, пока загрузится скрипт, 
выполнить его, и только затем обработать остальную страницу.
Это делается на случай, если скрипт захочет изменить DOM или даже дописать в него (document.write), так что DOMContentLoaded должен 
подождать 
(T.е. скриптьі <script>...</script> или <script src="..."></script> блокируют DOMContentLoaded, браузер ждёт, пока они выполнятся.).

Поэтому DOMContentLoaded определённо случится после таких скриптов:

<script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM готов! (все скрипты выполнены)");
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script><!--Библиотека--> <!--блокирует DOMContentLoaded-->

<script>                                                                                    //--блокирует DOMContentLoaded--//
  alert("Библиотека загружена, встроенный скрипт выполнен");
</script>
*/

'use strict';
alert("Start 2_DOMContentLoaded_script_PageLoadDoc");


// Скрипты, которые не блокируют DOMContentLoaded.

// Есть ДВА ИСКЛЮЧЕНИЯ из этого правила:

  // - СКРИПТЬІ С АТРИБУТОМ ASYNC, который мы рассмотрим немного позже, не блокируют DOMContentLoaded.
  // - Скрипты, сгенерированные ДИНАМИЧЕСКИ при помощи document.createElement('script') и затем добавленные на страницу, 
  //    также не блокируют это событие.



alert("End");