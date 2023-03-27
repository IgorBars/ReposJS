/* JawaScript - Ex9_insertAdjacentHTML_IzmenDokumentaDocument         
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>

*/

'use strict';
alert("Start Ex9_insertAdjacentHTML_IzmenDokumentaDocument");

// let ul = document.getElementById('ul');

// let li = ul.firstElementChild;

let li = document.getElementById('one');

li.insertAdjacentHTML("afterend", '<li>2</li><li>3</li>');
  


alert("End");