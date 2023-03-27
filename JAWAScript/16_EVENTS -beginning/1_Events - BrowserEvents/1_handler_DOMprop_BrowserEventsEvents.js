/* JawaScript - 1_handler_DOMprop_BrowserEventsEvents               elem.onclick
Обработчик может быть назначен, как DOM-свойство: elem.onclick = handler.
*/

'use strict';
alert("Start 1_handler_DOMprop_BrowserEventsEvents");

let input = document.querySelector('input');

input.onclick = function() {   // установим атрибут из JS
    alert('Клик!');
};


alert( input.outerHTML );   // проверим успешную установку атрибута             (function() - не отображается!!!)
for (let {name, value} of input.attributes) {alert(name + ": " + value);}

alert("End");