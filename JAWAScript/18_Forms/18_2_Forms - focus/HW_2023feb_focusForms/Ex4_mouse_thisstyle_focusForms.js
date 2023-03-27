/* JawaScript - Ex4_mouse_thisstyle_focusForms               Мышь, управляемая клавиатурой

Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать.

P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.
P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.
*/

'use strict';
alert("Start Ex4_mouse_thisstyle_focusForms");



mouse.onclick = function() {
  this.style.left = this.getBoundingClientRect().left + 'px';             // для position: fixed    - обязательно задать относительньіе координатьі
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
};

mouse.tabIndex = 0;                                                       // без фокусировки - не работает onkeydown
mouse.onkeydown = function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';  // parseInt вьітягивает число из буквенно-числ зн (232px=>232)
      return false;
    case 'ArrowUp':
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 'ArrowRight':
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 'ArrowDown':
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};



alert("End");