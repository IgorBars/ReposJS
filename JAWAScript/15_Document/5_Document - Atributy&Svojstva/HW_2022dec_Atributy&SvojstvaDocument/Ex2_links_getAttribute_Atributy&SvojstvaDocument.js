/* JawaScript - Ex2_links_getAttribute_Atributy&SvojstvaDocument
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
alert("Start Ex2_links_getAttribute_Atributy&SvojstvaDocument");

let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}


// Пожалуйста, обратите внимание: мы используем link.getAttribute('href'). 
// Не link.href, потому что нам нужно значение из HTML.




alert("End");