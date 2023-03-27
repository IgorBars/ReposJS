/* JawaScript - 3_form_elements_fieldset_SvstvMetodsForms               

Форма может содержать один или несколько элементов <fieldset> внутри себя. 
Они также поддерживают свойство elements, в котором находятся элементы управления внутри них.


<form id="form">
  <fieldset name="userFields">
    <legend>info</legend>
    <input name="login" type="text">
  </fieldset>
</form>
*/

'use strict';
alert("Start 3_form_elements_fieldset_SvstvMetodsForms");


alert(form.elements.login);                 // <input name="login">

let fieldset = form.elements.userFields;
alert(fieldset);                            // HTMLFieldSetElement

// мы можем достать элемент по имени как из формы, так и из fieldset с ним
alert(fieldset.elements.login == form.elements.login); // true


alert("End");