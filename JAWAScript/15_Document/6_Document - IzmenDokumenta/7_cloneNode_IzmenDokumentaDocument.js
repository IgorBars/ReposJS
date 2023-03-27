/* JawaScript - 7_cloneNode_IzmenDokumentaDocument         Клонирование узлов: cloneNode

Вызов elem.cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами. 
Если мы вызовем elem.cloneNode(false), тогда клон будет без дочерних элементов.
*/

'use strict';
alert("Start 7_cloneNode_IzmenDokumentaDocument");


let div = document.getElementById('div');

let div2 = div.cloneNode(true); // клонировать сообщение («глубокий» клон)
div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент

div.after(div2); // показать клонированный элемент после существующего div


alert("End");