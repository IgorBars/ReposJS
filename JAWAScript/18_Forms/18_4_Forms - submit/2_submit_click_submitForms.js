/* JawaScript - 2_submit_click_submitForms               Взаимосвязь между submit и click

При отправке формы по нажатию Enter в текстовом поле, генерируется событие click на кнопке <input type="submit">.
Это довольно забавно, учитывая что никакого клика не было.

<form onsubmit="alert('submit!');return false">
 <input type="text" size="30" value="Установите фокус здесь и нажмите Enter">
 <input type="submit" value="Отправить" onclick="alert('click')">
</form>
*/

'use strict';
alert("Start 2_submit_click_submitForms");




alert("End");