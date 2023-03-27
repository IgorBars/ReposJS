/* JawaScript - 2_createElement_append_IzmenDokumentaDocument     Создание элемента
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
alert("Start 2_createElement_append_IzmenDokumentaDocument");

          
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);



alert("End");