/* JawaScript - Ex1_house2_mouseoverEnterINTERFACEevents               
Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.

Это похоже на задачу Поведение "подсказка", но здесь элементы с подсказками могут быть вложены друг в друга. 
Показываться должна подсказка на самом глубоко вложенном элементе.

Только одна подсказка может быть показана в любой момент времени.
*/

'use strict';
alert("Start Ex1_house2_mouseoverEnterINTERFACEevents");



//закладуємо функціонал: при заході на потомка - видалення підказки (у onmouseout), штатна обробка target (у onmouseover) і створення підказки наново

let tooltip; // создадим глобальную переменную для єлемента подсказки (доступ для удаления)

document.onmouseover = function(event) {
  let target = event.target.closest('[data-tooltip]');  // для кожного ел під вказівником мишки шукати батьківсьий елемент з атрибутом tooltip

  if (!target) return;    // якщо немає батьківського елементу з атрибутом tooltip

  // target - батьківсьий елемент з атрибутом tooltip
  tooltip = showTooitip(target);
};

document.onmouseout = function(e) {

  if (tooltip) {    // если уход с tooltipElem
    tooltip.remove();
    tooltip = null;
  }
};

function showTooitip(target) {                            // показать элемент подсказки
      
  let tooltipElem = document.createElement('div');        // правильно работать внутри функции с локальной переменной и возвратить результат в глобальную
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = target.dataset.tooltip;         // вміст за умовою з атрибуту data-tooltip
  document.body.append(tooltipElem);

  // позиционируем элемент подсказки сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;                               // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
  return tooltipElem;
}


alert("End");//
