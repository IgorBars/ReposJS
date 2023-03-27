/* JawaScript - Ex1_textarea_contentEditable_focusForms               Редактируемый div

Создайте <div>, который превращается в <textarea>, если на него кликнуть.

<textarea> позволяет редактировать HTML в элементе <div>.

Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, 
и его содержимое становится HTML-кодом в <div>.

Заметьте: <textarea> должен иметь class="edit"
my.css содержит стиль, чтобы <textarea> и <div> были одного размера

<div id="view" class="view">Текст</div>
*/

'use strict';
alert("Start Ex1_textarea_contentEditable_focusForms");


let viewEl = document.getElementById('view');

viewEl.onclick =  function() {
  this.tabIndex = 0;
  this.focus();
  this.classList.add("edit");
  this.contentEditable = true;      /* теперь view сам редактируемьій */
};

viewEl.onblur =  function() {
  this.classList.remove("edit");
};

viewEl.onkeydown = function(event) {
  if (event.key == 'Enter') {
    this.blur();
  }
};



alert("End");