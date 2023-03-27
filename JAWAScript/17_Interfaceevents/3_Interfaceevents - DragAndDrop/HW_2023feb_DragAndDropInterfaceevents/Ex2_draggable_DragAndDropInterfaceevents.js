/* JawaScript - Ex2_draggable_DragAndDropInterfaceevents               
Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой. 
*/

'use strict';
alert("Start Ex2_draggable_DragAndDropInterfaceevents");


let field = document.querySelector('.field');

document.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера) - реакцию на mousedown (handler) пишем сами

  if( !event.target.classList.contains('draggable') ) return;

  let dragEl = event.target;

  dragEl.ondragstart = function() { // отключаем встроенньій в браузере Drag and Drop для єлемента dragEl
    return false;
  };

  let shiftX = event.pageX - dragEl.getBoundingClientRect().left;
  let shiftY = event.pageY - dragEl.getBoundingClientRect().top;

  dragEl.style.position = 'absolute';       // fixed
  positiontAt(event.pageX, event.pageY);   // важно сразу установить dragEl на нужную позицию (иначе скачек)

  function positiontAt(pageX, pageY) {
    dragEl.style.left = pageX - shiftX + 'px';
    dragEl.style.top = pageY - shiftY + 'px';
  }
  
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {

    // курсор вышел из слайдера => оставить бегунок в его границах.
    // if (newLeft < 0) {
    //   newLeft = 0;
    // }
    // let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    // if (newLeft > rightEdge) {
    //   newLeft = rightEdge;
    // }

    positiontAt(event.pageX, event.pageY);
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};




alert("End");
