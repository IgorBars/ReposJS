/* JawaScript - Ex1_slider_relative_DragAndDropInterfaceevents               
Создайте слайдер:
Важные детали:

    - Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. 
        При этом бегунок должен останавливаться чётко в нужном конце полосы.
    - При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя).
*/

'use strict';
alert("Start Ex1_slider_relative_DragAndDropInterfaceevents");

let slider = document.getElementById('slider');
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

thumb.ondragstart = function() {
  return false;
};


alert("End");
