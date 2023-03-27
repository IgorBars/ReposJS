/* JawaScript - 3_elem_style_IzmenDokumentaDocument         elem.style              - ОБ'ЬЕКТ STYLE
                                            УСТАНАВЛИВАЕМ СТИЛЬ ЕЛЕМЕНТА С ПОМОЩЬЮ JS

Свойство elem.style – это объект, который соответствует тому, что написано в атрибуте "style". 
Установка свойства стиля     elem.style.width="100px"    работает так же, как наличие в атрибуте style строки width:100px.

Для свойства из нескольких слов используется camelCase:
 - background-color  => elem.style.backgroundColor
 - z-index           => elem.style.zIndex
 - border-left-width => elem.style.borderLeftWidth
*/

'use strict';
alert("Start 3_elem_style_IzmenDokumentaDocument");


document.body.style.backgroundColor = prompt('background color?', 'green');

alert(document.body.style.backgroundColor); // green

alert("End");