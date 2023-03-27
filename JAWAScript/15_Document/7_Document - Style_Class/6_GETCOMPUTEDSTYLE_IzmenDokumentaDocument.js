/* JawaScript - 6_GETCOMPUTEDSTYLE_IzmenDokumentaDocument       метод  getComputedStyle
Получить текущее значение стилей елемента.

getComputedStyle(element, [pseudo])
    - element
            Элемент, значения для которого нужно получить

    - pseudo
            Указывается, если нужен стиль псевдоэлемента, например ::before. 
    Пустая строка или отсутствие аргумента означают сам элемент.


Результат вызова – объект со стилями, похожий на elem.style, но с учётом всех CSS-классов. Только для чтения. (!!!)

<head>
  <style> body { color: red; margin: 5px } </style>
</head>
*/

'use strict';
alert("Start 6_GETCOMPUTEDSTYLE_IzmenDokumentaDocument");


let computedStyle = getComputedStyle(document.body);

// сейчас мы можем прочитать отступ и цвет

alert( computedStyle.marginTop ); // 5px            (Только для чтения. (!!!))
alert( computedStyle.color ); // rgb(255, 0, 0)


alert("End");