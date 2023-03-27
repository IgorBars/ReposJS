/* JawaScript - Ex4_openMenu2_BrowserEventsEvents               

Создать меню, которое по нажатию открывается либо закрывается.


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

.menu > ul          -только для ел ul, являющегося именно дочерним(!) елементу класса menu (не внучатьім)
.menu .menu1 ul     -для ел ul, являющегося дочерним/внучатьім елементу класса .menu1, являющегося дочерним/внучатьім елементу класса .menu
.menu.open > ul     -только для ел ul, являющегося именно дочерним(!)(не внучатьім) елементу классов menu + open
*/

'use strict';
alert("Start Ex4_openMenu2_BrowserEventsEvents");


let div = document.querySelector(".menu");
let div1 = document.querySelector(".menu1");
let div2 = div1.nextElementSibling;


let input = document.querySelector('span');
let inputLi1 = document.querySelector('.titleLi1');
let inputLi2 = div2.firstElementChild;

function hiddenElem() {
    div.classList.toggle('open');
}
function hiddenElem1() {
    div1.classList.toggle('open');
}
function hiddenElem2() {
    div2.classList.toggle('open');
}

input.onclick = hiddenElem;
inputLi1.onclick = hiddenElem1;
inputLi2.onclick = hiddenElem2;


alert("End");