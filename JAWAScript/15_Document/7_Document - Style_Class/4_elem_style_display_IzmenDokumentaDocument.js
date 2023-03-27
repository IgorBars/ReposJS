/* JawaScript - 4_elem_style_display_IzmenDokumentaDocument         Сброс стилей: св-во  display    об'ьекта elem.style

Иногда нам нужно добавить свойство стиля, а потом, позже, убрать его.

Например, чтобы скрыть элемент, мы можем задать elem.style.display = "none".

Затем мы можем удалить свойство style.display, чтобы вернуться к первоначальному состоянию. 
Вместо delete elem.style.display мы должны присвоить ему пустую строку: elem.style.display = "".
*/

'use strict';
alert("Start 4_elem_style_display_IzmenDokumentaDocument");

document.body.style.backgroundColor = prompt('background color?', 'green');// применим изначально цвет фона 

// если мы запустим этот код, <body> "мигнёт"
document.body.style.display = "none"; // скрыть

setTimeout(() => document.body.style.display = "", 2000); // возврат к изначальному состоянию


alert("End");