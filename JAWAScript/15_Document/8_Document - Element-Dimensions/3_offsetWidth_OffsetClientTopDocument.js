/* JawaScript - 3_offsetWidth_OffsetClientTopDocument         offsetWidth   offsetHeight
У элемента есть рамка (border), внутренний отступ (padding) и прокрутка. Полный набор характеристик. 
Обратите внимание, тут нет внешних отступов (margin), потому что они не являются частью элемента, 
для них нет особых JavaScript-свойств.

Значениями свойств являются числа, подразумевается, что они в пикселях.


*/

'use strict';
alert("Start 3_offsetWidth_OffsetClientTopDocument");

let example = document.getElementById('example');

alert(example.offsetParent.id); // main

alert(example.offsetWidth);      //  390 (– внешняя ширина блока)
/*offsetWidth = 390 – внешняя ширина блока, её можно получить сложением CSS-ширины (300px), 
внутренних отступов (2 * 20px) и рамок (2 * 25px).*/

alert(example.offsetHeight);    // 290  (– внешняя высота блока.)


/*

*/
alert("End");