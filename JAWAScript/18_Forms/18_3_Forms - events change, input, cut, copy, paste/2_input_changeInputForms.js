/* JawaScript - 2_input_changeInputForms               input

Событие input срабатывает каждый раз при изменении значения.

<input type="text" id="input"> oninput: <span id="result"></span>
*/

'use strict';
alert("Start 2_input_changeInputForms");


input.oninput = function() {
  result.innerHTML = input.value;
};


alert("End");

// Событие input происходит после изменения значения.
// Поэтому мы не можем использовать event.preventDefault() там – будет уже слишком поздно, никакого эффекта не будет.