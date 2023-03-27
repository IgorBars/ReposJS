/* JawaScript - 4_clientTop_OffsetClientTopDocument         clientTop   clientLeft
У элемента есть рамка (border), внутренний отступ (padding) и прокрутка. Полный набор характеристик. 
Обратите внимание, тут нет внешних отступов (margin), потому что они не являются частью элемента, 
для них нет особых JavaScript-свойств.

Значениями свойств являются числа, подразумевается, что они в пикселях.

Внутри элемента у нас рамки (border).
Для них есть свойства-метрики clientTop и clientLeft.
*/

'use strict';
alert("Start 4_clientTop_OffsetClientTopDocument");

let example = document.getElementById('example');

alert(example.offsetParent.id); // main

alert(example.clientTop);      //  25 

alert(example.clientLeft);    // 25  (c учетом полосьі прокрутки, если она слева)


/*

*/
alert("End");