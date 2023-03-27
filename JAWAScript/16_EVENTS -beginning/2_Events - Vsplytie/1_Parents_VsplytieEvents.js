/* JawaScript - 1_Parents_VsplytieEvents               
Принцип всплытия очень простой.

Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, 
затем выше и так далее, вверх по цепочке предков (до вьісшего родителя, находящегося в зоне клика)

При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
*/

'use strict';
alert("Start 1_Parents_VsplytieEvents");

// событие focus не всплывает.

alert("End");