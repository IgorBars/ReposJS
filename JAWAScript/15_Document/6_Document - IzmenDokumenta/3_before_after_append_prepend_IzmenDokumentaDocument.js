/* JawaScript - 3_before_after_append_prepend_IzmenDokumentaDocument     Создание элемента
DOM-узел можно создать двумя методами:

document.createElement(tag)
Создаёт новый элемент с заданным тегом:
let div = document.createElement('div');

document.createTextNode(text)
Создаёт новый текстовый узел с заданным текстом:
let textNode = document.createTextNode('А вот и я');

Вот методы для различных вариантов вставки (DOM-узлов или текстовых фрагментов.):

    - node.append(...nodes or strings) – добавляет узлы или строки в конец node,
    - node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
    - node.before(...nodes or strings) –- вставляет узлы или строки до node,
    - node.after(...nodes or strings) –- вставляет узлы или строки после node,
    - node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
*/

'use strict';
alert("Start 3_before_after_append_prepend_IzmenDokumentaDocument");

let ol = document.getElementById('ol');
ol.before('before');     // вставить строку "before" перед <ol>
ol.after('after');       // вставить строку "after" после <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);     // вставить liFirst в начало <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);       // вставить liLast в конец <ol>



alert("End");