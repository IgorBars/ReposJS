/* JawaScript - Ex2_handler_hiddenMe_BrowserEventsEvents               

Навесить на елемент скрьівающий себя обработчик

<input value="Скрьіть текстовьій елемент"  type="button">
*/

'use strict';
alert("Start Ex2_handler_hiddenMe_BrowserEventsEvents");

let input = document.querySelector('input');

function hiddElem() {

    // setTimeout(() => input.remove(), 500);
    // setTimeout(() => input.style.display = "none", 500);
    setTimeout(() => input.hidden = true, 500);
}

// input.onclick = hiddElem;
input.addEventListener('click', function(event) {
    hiddElem();
})




alert("End");