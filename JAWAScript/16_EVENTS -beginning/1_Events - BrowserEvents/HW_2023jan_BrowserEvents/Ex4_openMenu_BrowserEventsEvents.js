/* JawaScript - Ex4_openMenu_BrowserEventsEvents               

Создать меню, которое по нажатию на текстовом єлементе открывается либо закрывается.


Меню – это отдельный графический компонент на странице, так что его лучше вынести в отдельный DOM-элемент:

Для заголовка мы используем тег <span>, потому что <div>, как и любой блочный элемент, 
имеет скрытое свойство display:block, а значит, занимает ширину 100%.

…тег <span> – строчный элемент, по умолчанию имеет свойство display: inline, 
который занимает ровно столько места, сколько занимает сам текст:

        <div class="menu">
            <span class="title">Сладости (нажми меня)!</span>
            <ul>
                <li>Пирожное</li>
                <li>Пончик</li>
                <li>Мёд</li>
            </ul>
        </div>
*/

'use strict';
alert("Start Ex4_openMenu_BrowserEventsEvents");

// работаем с функциональньім блочньім єлементом div
let div = document.querySelector("div.menu");       // alert(div);             // [object HTMLDivElement]
// let ul = document.querySelector("div.menu > ul");   alert(ul);              // css-селектор дочерних єлементов ul для div с классом menu
let input = document.querySelector('span.title');   // alert(input);           // [object HTMLSpanElement]

function hiddenElem() {
    div.classList.toggle('open');             // alert(div.classList);    // menu open            menu
}


// input.onclick = hiddenElem;
input.addEventListener('click', function(event) {
    hiddenElem();
})





alert("End");