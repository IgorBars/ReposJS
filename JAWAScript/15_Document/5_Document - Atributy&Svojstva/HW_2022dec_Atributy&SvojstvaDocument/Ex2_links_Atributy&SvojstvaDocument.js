/* JawaScript - Ex2_links_Atributy&SvojstvaDocument
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:
    - Её href содержит ://
    - Но не начинается с http://internal.com.

    <a href="local/path">local/path</a> - ссьілка на свое расположение
*/

'use strict';
alert("Start Ex2_links_Atributy&SvojstvaDocument");

let elems = document.querySelectorAll('li > a');    // сразу исключаем ссылку в <body> (она не внешняя)

for(let el of elems) {  alert(el);

    if (el.matches('a[href*="://"]') && !el.matches('a[href*="://internal"]')) {     // если атрибут елемента а содержит :// (удовлетворяет ли elem CSS-селектору)
        el.style.color = 'orange';
    }
}


// добавление стиля для одной ссылки
// let link = document.querySelector('a');
// link.style.color = 'orange';




alert("End");