/* JawaScript - 4_document_body_style_background_БраузОкружDocument 
BOM (Browser Object Model) -Объектная модель браузера.

document.body – объект для тега <body>

//скопировать путь к любому элементу для JS: кликаете в дереве страницы 
//по любому элементы правой кнопкой --> copy --> copy JS path, вставляете 
//в консоль или куда вам нужно и получаете этот данный элемент. Не благодарите))

Доступ к data-tag по значению:
ElementNode.querySelectorAll('[data-tag = value]'). Такое?
*/
'use strict';


alert("Start 4_document_body_style_background_БраузОкружDocument");


document.body.style.background = 'red'; // сделать фон красным

setTimeout(() => document.body.style.background = '', 3000); // вернуть назад


alert("End");