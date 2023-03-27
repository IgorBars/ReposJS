/* JawaScript - Ex2_links_selector_Atributy&SvojstvaDocument
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
alert("Start Ex2_links_selector_Atributy&SvojstvaDocument");

// найти все ссылки, атрибут href у которых содержит ://
// и при этом href не начинается с http://internal.com
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');




alert("End");