/* JawaScript - Ex1_handler_hidden_BrowserEventsEvents               

Навесить на елемент скрьівающий обраюотчик для другого елемента 

		<input value="Скрьіть текстовьій елемент"  type="button">
        <div id = 'hiddElem'>Text</div>
*/

'use strict';
alert("Start Ex1_handler_hidden_BrowserEventsEvents");

let input = document.querySelector('input');
let helem = document.getElementById('hiddElem');

function hiddElem() {

    // setTimeout(() => {helem.remove(); input.value = "Текстовьій елемент: скрьіт";}, 1000);
    // setTimeout(() => {helem.style.display = "none"; input.value = "Текстовьій елемент: скрьіт";}, 1000);
    setTimeout(() => {helem.hidden = true; input.value = "Текстовьій елемент: скрьіт";}, 500);
}

// input.onclick = hiddElem;
// input.addEventListener('click', hiddElem);
input.addEventListener('click', function(event){
    hiddElem();
});




alert("End");