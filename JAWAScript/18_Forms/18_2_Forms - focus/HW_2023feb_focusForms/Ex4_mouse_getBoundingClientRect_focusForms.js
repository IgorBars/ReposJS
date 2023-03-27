/* JawaScript - Ex4_mouse_getBoundingClientRect_focusForms               Мышь, управляемая клавиатурой

Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать.

P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.
P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.
*/

'use strict';
alert("Start Ex4_mouse_getBoundingClientRect_focusForms");



let mouse = document.getElementById('mouse');
mouse.tabIndex = 0;                                                        // без фокусировки - не работает onfocus и onkeydown

mouse.onfocus = function() {
  this.style.position = 'absolute';
  this.style.backgroundColor = 'yellow';

  mouse.onkeydown = function(event){
    if(event.key == 'ArrowRight') {
      this.style.left = this.getBoundingClientRect().left + this.clientWidth/2 + 'px';

    } else if(event.key == 'ArrowLeft') {
      this.style.left = this.getBoundingClientRect().left - this.clientWidth/2 + 'px';

    } else if(event.key == 'ArrowUp') {
      this.style.top = this.getBoundingClientRect().top - this.clientHeight/2 + 'px';

    } else if(event.key == 'ArrowDown') {
      this.style.top = this.getBoundingClientRect().top + this.clientHeight/2 + 'px';
    }
  };
};




alert("End");