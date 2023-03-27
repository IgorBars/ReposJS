/* JawaScript - 3_cut_copy_paste_changeInputForms               input

Эти события происходят при вырезании/копировании/вставке данных.

Они относятся к классу ClipboardEvent и обеспечивают доступ к копируемым/вставляемым данным.
Мы также можем использовать event.preventDefault() для предотвращения действия по умолчанию, и в итоге ничего не скопируется/не вставится.

<input type="text" id="input">
*/

'use strict';
alert("Start 3_cut_copy_paste_changeInputForms");

// индикация
// input.onpaste = e => alert(e.type + ' - ' + e.clipboardData.getData('text/plain'));
// input.oncut = input.oncopy = e => alert(e.type + ' - ' + document.getSelection());


// индикация с запретом
input.onpaste = function(event) {
  alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
  return false;
};
// индикация
input.oncut = input.oncopy = function(event) {
  alert(event.type + '-' + document.getSelection());
};


alert("End");

