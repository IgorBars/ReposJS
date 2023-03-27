/* JawaScript - 1_change_changeInputForms               change

Событие change срабатывает по окончании изменения элемента.

Для текстовых <input> это означает, что событие происходит при потере фокуса.

<input type="text" onchange="alert(this.value)">
<input type="button" value="Button">



Для других элементов: select, input type=checkbox/radio событие запускается сразу после изменения значения:

<select onchange="alert(this.value)">
  <option value="">Выберите что-нибудь</option>
  <option value="1">Вариант 1</option>
  <option value="2">Вариант 2</option>
  <option value="3">Вариант 3</option>
</select>
*/

'use strict';
alert("Start 1_change_changeInputForms");




alert("End");