/* JawaScript - Ex1_createTextNode_IzmenDokumentaDocument         

У нас есть пустой DOM-элемент elem и строка text.

Какие из этих 3-х команд работают одинаково?
    - elem.append(document.createTextNode(text))
    - elem.innerHTML = text
    - elem.textContent = text
*/

'use strict';
alert("Start Ex1_createTextNode_IzmenDokumentaDocument");


let text = '<b>текст</b>';

let elem1 = document.getElementById('elem1');
elem1.append(document.createTextNode(text));    // <b>текст</b>

let elem2 = document.getElementById('elem2');
elem2.innerHTML = text;                         // текст (жирньій шрифт)


let elem3 = document.getElementById('elem3');
elem3.textContent = text;                       // <b>текст</b>
  


alert("End");