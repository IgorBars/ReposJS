/* JawaScript - 1_focusin_focusout_focusForms               

События focus и blur не всплывают.
Cобытия focusin и focusout – такие же, как и focus/blur, но они всплывают.
Єти события должны использоваться с elem.addEventListener, но не с on<event>.

<form id="form">
  <input type="text" name="name" value="Имя">
  <input type="text" name="surname" value="Фамилия">
</form>
*/

'use strict';
alert("Start 1_focusin_focusout_focusForms");


form.addEventListener("focusin", () => form.classList.add('focused'));    // вспльівающее собьітие focusin от <input>  ловим на <form>
form.addEventListener("focusout", () => form.classList.remove('focused'));


alert("End");