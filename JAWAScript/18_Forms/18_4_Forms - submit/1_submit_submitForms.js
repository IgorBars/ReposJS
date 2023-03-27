/* JawaScript - 1_submit_submitForms               Событие: submit

Есть два основных способа отправить форму:

  - Первый – нажать кнопку <input type="submit"> или <input type="image">.
  - Второй – нажать Enter, находясь на каком-нибудь поле.

Оба действия сгенерируют событие submit на форме. Обработчик может проверить данные, и если есть ошибки, 
показать их и вызвать event.preventDefault(), тогда форма не будет отправлена на сервер.

<form onsubmit="alert('submit!');return false">
  Первый пример: нажмите Enter: <input type="text" value="Текст"><br>
  Второй пример: нажмите на кнопку "Отправить": <input type="submit" value="Отправить">
</form>
*/

'use strict';
alert("Start 1_submit_submitForms");




alert("End");