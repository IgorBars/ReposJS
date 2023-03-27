/* JawaScript - 1_handler_DOMprop_function_BrowserEventsEvents               elem.onclick

Обработчик может быть назначен, как DOM-свойство в виде именованной функции: elem.onclick = handler().
*/

'use strict';
alert("Start 1_handler_DOMprop_function_BrowserEventsEvents");


let input = document.querySelector('input');

// function countRabbits() {
//     for(let i=1; i<=3; i++) {
//       alert("Кролик номер " + i);
//     }
// }

// input.onclick = countRabbits;

input.onclick = function countRabbits() {    // установим атрибут из JS
    for(let i=1; i<=3; i++) {
      alert("Кролик номер " + i);
    }
}

alert( input.outerHTML );   // проверим успешную установку атрибута             (function() - не отображается!!!)
for (let {name, value} of input.attributes) {alert(name + ": " + value);}

alert("End");