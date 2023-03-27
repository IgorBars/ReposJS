/* JawaScript - 2_offsetParent_OffsetClientTopDocument         offsetParent offsetTop offsetLeft
 
В геометрических свойствах (метриках) нет внешних отступов (margin), потому что они не являются частью элемента, 
для них нет особых JavaScript-свойств.                                                  (!!!)

Значениями свойств являются числа, подразумевается, что они в пикселях.

offsetParent, offsetLeft/Top - «самые внешние» метрики

В свойстве offsetParent находится предок элемента, который используется внутри браузера для вычисления координат 
при рендеринге.

То есть, ближайший предок, который удовлетворяет следующим условиям:

  - Является CSS-позиционированным (CSS-свойство position равно absolute, relative, fixed или sticky),
  - или <td>, <th>, <table>,
  - или <body>.

Свойства offsetLeft/offsetTop содержат координаты x/y относительно верхнего левого угла offsetParent.
*/

'use strict';
alert("Start 2_offsetParent_OffsetClientTopDocument");

let example = document.getElementById('example');

alert(example.offsetParent.id); // main
alert(example.offsetLeft); // 180 (обратите внимание: число, а не строка "180px")
alert(example.offsetTop); // 180


/*
Существует несколько ситуаций, когда offsetParent равно null:

Для скрытых элементов (с CSS-свойством display:none или когда его нет в документе).
Для элементов <body> и <html>.
Для элементов с position:fixed.
*/
alert("End");