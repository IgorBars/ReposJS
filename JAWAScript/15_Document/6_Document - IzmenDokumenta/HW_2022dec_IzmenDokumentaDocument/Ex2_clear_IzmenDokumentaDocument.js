/* JawaScript - Ex2_clear_IzmenDokumentaDocument         

Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
*/

'use strict';
alert("Start Ex2_clear_IzmenDokumentaDocument");


function clear(elem) {

     /* ваш код */
     elem.innerHTML = '';
}

let elem = document.getElementById('elem');
clear(elem); // очищает elem
  





alert("End");