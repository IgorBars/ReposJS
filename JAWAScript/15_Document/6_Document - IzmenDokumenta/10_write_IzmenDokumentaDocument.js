/* JawaScript - 10_write_IzmenDokumentaDocument         document.write
Вызов document.write(html) записывает html на страницу «прямо здесь и сейчас». 
Строка html может быть динамически сгенерирована, поэтому метод достаточно гибкий.
Мы можем использовать JavaScript, чтобы создать полноценную веб-страницу и записать её в документ.

Вызов document.write работает только во время загрузки страницы.
Если вызвать его позже, то существующее содержимое документа затрётся.
*/

'use strict';
alert("Start 9_appendArray_IzmenDokumentaDocument");

/*  Фрагмент в html:

      <body>
            <p>Где-то на странице...</p>
                <script>
                    document.write('<b>Привет из JS</b>');
                </script>
            <p>Конец</p>
            
            <script src="10_write_IzmenDokumentaDocument.js"></script>
      </body>
*/

alert("End");