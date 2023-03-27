/* JawaScript - 4_element_form_SvstvMetodsForms               

Для любого элемента форма доступна через element.form. Так что форма ссылается на все элементы, а эти элементы ссылаются на форму.


<form id="form">
  <input type="text" name="login">
</form>
*/

'use strict';
alert("Start 4_element_form_SvstvMetodsForms");


// form -> element
let login = form.login;     // <input name="login">

// element -> form
alert(login.form);          // HTMLFormElement


alert("End");