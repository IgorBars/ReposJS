/* JawaScript - 2_querySelectorAll_GetElemQuerySelDocument       elem.querySelectorAll(css) - МЕТОДЬІ ПОИСКА

Самый универсальный метод поиска – это elem.querySelectorAll(css), он возвращает все элементы внутри elem, 
удовлетворяющие данному CSS-селектору.

Псевдоклассы в CSS-селекторе, в частности :hover и :active, также поддерживаются. 
Например, document.querySelectorAll(':hover') вернёт коллекцию (в порядке вложенности: от внешнего к внутреннему) 
                          из текущих элементов под курсором мыши.
*/

'use strict';
alert("Start 2_querySelectorAll_GetElemQuerySelDocument");

let elements = document.querySelectorAll('ul > li:last-child'); //   (только последние li в ul)

for (let elem of elements) {
  alert(elem.innerHTML); // "тест", "пройден"   (только последние li двух ul)
}


// ищем только последние li во втором ul
// let elements = document.body.children[1].querySelectorAll('ul > li:last-child');


// let elements = document.querySelectorAll('ul > li:first-child, li:last-child');// +

alert("End");