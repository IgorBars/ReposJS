/* JawaScript - 1_focus_blur_focusForms               

События focus и blur не всплывают.
Событие focus вызывается в момент фокусировки, а blur – когда элемент теряет фокус.

Ваш email: <input type="email" id="input">
<div id="error"></div>
*/

'use strict';
alert("Start 1_focus_blur_focusForms");

let input = document.getElementById('input');
let error = document.getElementById('error');

input.onblur = function() {
  if (!input.value.includes('@')) { // не email
    input.classList.add('invalid');
    error.innerHTML = 'Пожалуйста, введите правильный email.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};



alert("End");