/* JawaScript - Ex1_form_search_GetElemQuerySelDocument    
Найти:
    - Таблицу с id="age-table".
    - Все элементы label внутри этой таблицы (их три).
    - Первый td в этой таблице (со словом «Age»).
    - Форму form с именем name="search".
    - Первый input в этой форме.
    - Последний input в этой форме.

*/

'use strict';
alert("Start Ex1_form_search_GetElemQuerySelDocument");


let table = document.getElementById('age-table');
    table.style.background = "#FBeCD2";

// let labels = table.getElementsByTagName("label");
let labels = table.querySelectorAll("label");
    labels[0].style.background = "#cBCCD2";
    labels[1].style.background = "#cBCCD2";
    labels[2].style.background = "#cBCCD2";

let tdFirst = table.querySelector("td");
    tdFirst.style.background = "#FBCCD2";

// let form = document.getElementsByName("search")[0];
let form = document.querySelector('form[name="search"]');
    form.style.background = "#dBbCc2";

// let inputFirst = form.getElementsByTagName('input')[0]
let inputFirst = form.querySelector("input");
    inputFirst.style.background = "#cBdCb2";

// let inputLast = form.querySelector("form > input");              // дочірній input для form      (селектор дочірнього ел)
// let inputLast = form.querySelector("label + input");             // наступний елемент за label   (селектор сусіднього ел)
// let inputLast = form.querySelector("input[value='Search!']");    // елемент input з атр value    (селектор атрибуту)
let inputLast = form.lastElementChild                               // навигаційне посилання вів parentElement
    inputLast.style.background = "#cBbCe2";



alert("End");