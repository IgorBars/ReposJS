/* JawaScript - Ex1_Animals_forEach_svojstvaUzlovDocument
У нас есть дерево, структурированное как вложенные списки ul/li.
Напишите код, который выведет каждый элемент списка <li>:
    - Какой в нём текст (без поддерева) ?
    - Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

'use strict';
alert("Start Ex1_Animals_forEach_svojstvaUzlovDocument");


const items = document.querySelectorAll('li');

items.forEach(item => {
  item = `${item.firstChild.data.trim()}: ${item.querySelectorAll('li').length}`;

  alert(item);
});


alert("End");