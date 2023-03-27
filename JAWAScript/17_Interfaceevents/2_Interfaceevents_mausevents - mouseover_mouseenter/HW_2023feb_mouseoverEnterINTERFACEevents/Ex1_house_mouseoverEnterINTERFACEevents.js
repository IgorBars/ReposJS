/* JawaScript - Ex1_house_mouseoverEnterINTERFACEevents               
Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.

Это похоже на задачу Поведение "подсказка", но здесь элементы с подсказками могут быть вложены друг в друга. 
Показываться должна подсказка на самом глубоко вложенном элементе.

Только одна подсказка может быть показана в любой момент времени.
*/

'use strict';
alert("Start Ex1_house_mouseoverEnterINTERFACEevents");



let tooltip;    // переменная для об'ьекта подсказки

document.onmouseover = function(event) {
  // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
  // так что событие mouseover произойдёт сразу на дочернем элементе.

  let anchorElem = event.target.closest('[data-tooltip]');

  if (!anchorElem) return;                                  // если нет родит ел [data-tooltip], код не должен упасть

  // создаем, показываем подсказку и запоминаем её в глобальную переменную (для onmouseout)
  tooltip = showTooltip(anchorElem);
}

document.onmouseout = function() {
    // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
    // (оно было где-то внутри и всплыло)
    // но в этом случае сразу же последует событие mouseover,
    // то есть подсказка исчезнет и потом снова покажется
    //
    // к счастью, этого не будет видно,
    // так как оба события происходят почти одновременно
    if (tooltip) {                                      // если вьіходим (даже на потомка) - удалить tooltip 
      tooltip.remove();
      tooltip = false;
    }

}

// показть подсказку
function showTooltip(anchorElem) {
    let tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = anchorElem.dataset.tooltip;
    document.body.append(tooltipElem);

    let coords = anchorElem.getBoundingClientRect();    // позиционируем над anchorElem

    // позиционируем подсказку над центром элемента
    let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + anchorElem.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    return tooltipElem; // возврат подсказки
  }

alert("End");//
