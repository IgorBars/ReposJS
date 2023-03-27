/* JawaScript - 1_form_elements_SvstvMetodsForms               

Формы в документе входят в специальную именованную коллекцию document.forms.

Это так называемая «именованная» коллекция: мы можем использовать для получения формы как её имя, так и порядковый номер в документе.

Когда мы уже получили форму, любой элемент доступен в именованной коллекции form.elements.

<form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form>
*/

'use strict';
alert("Start 1_form_elements_SvstvMetodsForms");


let formMy = document.forms.my;
// let formMy = document.forms[0];

let inputOne = formMy.elements.one;

alert(inputOne.value);                // 1



alert("End");