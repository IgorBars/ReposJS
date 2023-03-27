/* JawaScript - 2_method_focus_focusForms               

Методы elem.focus() и elem.blur() устанавливают/снимают фокус.

Ваш email: <input type="email" id="input">
<input type="text" style="width:280px" placeholder="введите неверный email и кликните сюда">
*/

'use strict';
alert("Start 2_method_focus_focusForms");


input.onblur = function() {
  if (!this.value.includes('@')) { // не email
    // показать ошибку
    this.classList.add("error");
    // ...и вернуть фокус обратно
    input.focus();
  } else {
    this.classList.remove("error");
  }
};


alert("End");