/* JawaScript - 3_replaceWith_IzmenDokumentaDocument     Создание элемента
DOM-узел можно создать двумя методами:

document.createElement(tag)
Создаёт новый элемент с заданным тегом:
let div = document.createElement('div');

document.createTextNode(text)
Создаёт новый текстовый узел с заданным текстом:
let textNode = document.createTextNode('А вот и я');

Вот методы для различных вариантов вставки:

    - node.append(...nodes or strings) – добавляет узлы или строки в конец node,
    - node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
    - node.before(...nodes or strings) –- вставляет узлы или строки до node,
    - node.after(...nodes or strings) –- вставляет узлы или строки после node,
    - node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
*/

'use strict';
alert("Start 3_replaceWith_IzmenDokumentaDocument");

          
let div = document.getElementById('div');

let div2 = div.cloneNode(true); // клонировать сообщение
div2.querySelector('strong').innerHTML = 'Вьі прочитали'; // изменить клонированный элемент
div.className = "alert2";

// показать клонированный элемент вместо существующего div через 4с
setTimeout(() => div.replaceWith(div2), 4000);

alert("End");