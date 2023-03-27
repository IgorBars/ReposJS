/* JawaScript - Ex1_div_DOMnavigationDocument              

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
*/

'use strict';
alert("Start Ex1_div_DOMnavigationDocument");

let div = document.body.firstElementChild; div.style.background = "yellow";
// let div = document.body.children[0];
// или (первый узел пробел, поэтому выбираем второй)
// let div = document.body.childNodes[1];
alert(div); // [object HTMLDivElement];

let ul = document.body.firstElementChild.nextElementSibling;  ul.style.background = "blue";
// let ul = document.body.lastElementChild;
// let ul = document.body.children[1];
alert(ul); // [object HTMLUListElement]

let lastli = document.body.firstElementChild.nextElementSibling.lastElementChild; lastli.style.background = "red";
// let lastli = document.body.lastElementChild.lastElementChild;
alert(lastli); // [object HTMLLIElement]


alert("End");