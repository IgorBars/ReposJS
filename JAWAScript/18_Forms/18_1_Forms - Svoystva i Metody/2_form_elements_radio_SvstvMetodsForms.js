/* JawaScript - 2_form_elements_radio_SvstvMetodsForms               

Может быть несколько элементов с одним и тем же именем, это часто бывает с кнопками-переключателями radio.

В этом случае form.elements[name] является коллекцией


<form>
  <input type="radio" name="age" value="10">
  <input type="radio" name="age" value="20">
</form>
*/

'use strict';
alert("Start 2_form_elements_radio_SvstvMetodsForms");


let form = document.forms[0];

let ageElems = form.elements.age;

alert(ageElems[0]); // [object HTMLInputElement]


alert("End");