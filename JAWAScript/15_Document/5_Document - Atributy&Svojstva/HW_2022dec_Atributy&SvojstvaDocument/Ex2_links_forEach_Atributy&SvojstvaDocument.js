/* JawaScript - Ex2_links_forEach_Atributy&SvojstvaDocument
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// добавление стиля для одной ссылки
// let link = document.querySelector('a');
// link.style.color = 'orange';

Ссылка является внешней, если:
    - Её href содержит ://
    - Но не начинается с http://internal.com.

    <a href="local/path">local/path</a> - ссьілка на свое расположение
*/

'use strict';
alert("Start Ex2_links_forEach_Atributy&SvojstvaDocument");



document
  .querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])')
  .forEach((a) => {
    a.style.color = 'orange';
});




alert("End");