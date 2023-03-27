/* JawaScript - 8_new_Option_SvstvMetodsForms               

option = new Option(text, value, defaultSelected, selected);

Параметры:
  - text – текст внутри <option>,
  - value – значение,
  - defaultSelected – если true, то ставится HTML-атрибут selected,
  - selected – если true, то элемент <option> будет выбранным.

Тут может быть небольшая путаница с defaultSelected и selected. Всё просто: defaultSelected задаёт HTML-атрибут, 
его можно получить как option.getAttribute('selected'), а selected – выбрано значение или нет, именно его важно поставить правильно. 
Впрочем, обычно ставят оба этих значения в true или не ставят вовсе (т.е. false).
*/

'use strict';
alert("Start 8_new_Option_SvstvMetodsForms");


let option = new Option("Текст", "value");
// создаст <option value="value">Текст</option>

// Тот же элемент, но выбранный:
// let option = new Option("Текст", "value", true, true);


alert("End");