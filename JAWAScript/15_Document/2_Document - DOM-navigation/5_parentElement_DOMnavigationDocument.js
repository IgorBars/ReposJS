/* JawaScript - 5_parentElement_DOMnavigationDocument              parentElement - СРЕДСТВА НАВИГАЦИИ

Есть дополнительный набор ссылок, которые учитывают только УЗЛЬІ-элементы.

Эти ссылки похожи на те, что раньше, только в ряде мест стоит слово Element (основные навигационные ссылки parentElement):

    - children – коллекция детей, которые являются элементами.
    - firstElementChild, lastElementChild – первый и последний дочерний элемент.
    - previousElementSibling, nextElementSibling – соседи-элементы.
    - parentElement – возвращает родительский УЗЕЛ-элемент.

Основные навигационные ссылки parentElement:
        -
    document.documentElement (<HTML>)
    document.body           (<body>)
    parentElement      (Родитель доступен через parentElement)
    children                (коллекция дочерних елементов)
    previousElementSibling,
    nextElementSibling,
    firstElementChild, 
    lastElementChild
*/

'use strict';
alert("Start 5_parentElement_DOMnavigationDocument");

alert( document.documentElement.parentNode );       // document
alert( document.documentElement.parentElement );    // null




/*

*/

alert("End");