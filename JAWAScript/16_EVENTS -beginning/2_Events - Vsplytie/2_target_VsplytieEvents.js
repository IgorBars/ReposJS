/* JawaScript - 2_target_VsplytieEvents               event.target.
Самый глубокий элемент, который вызывает событие, называется целевым элементом, и он доступен через event.target.

Отличия от this (=event.currentTarget):

    -event.target – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
    -this – это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.

При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
*/

'use strict';
alert("Start 2_target_VsplytieEvents");

form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';                          // изменяем фон "целевого" єлемента, на котором произошел клик
  
    // alert("target = " + event.target.tagName + ", this=" + this.tagName); // alert вьіведется перед сменой фона
    // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''                                 // после alert возвращаемся в исходньіе цвета
    }, 10);
};

alert("End");