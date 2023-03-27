/* JawaScript - Ex4_tooltip_VsplytieEvents               
Напишите JS-код, реализующий поведение «подсказка».

При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка 
и скрываться при переходе на другой элемент.

    -Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
    -Подсказка должна быть, по возможности, посередине элемента.
    -Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
    -Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
*/
'use strict';
alert("Start Ex4_tooltip_VsplytieEvents");


let tooltipElem; // создадим переменную для єлемента подсказки глобально (проще удалить)

// обработка собьітия при наведении мыши на элемент
document.onmouseover = function(event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip; // значення атрибуту data-tooltip на будь-якому елементі при наведенні курсору
  if (!tooltipHtml) return;                 // якщо нема значення

  // создать элемент подсказки
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;      // вміст за умовою з атрибуту data-tooltip
  document.body.append(tooltipElem);

  // спозиционируем элемент подсказки сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();  //  /коорд кнопки/

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

// обработка собьітия при уходе курсора с элемента
document.onmouseout = function(e) {

  // удалить елемент-подсказку, 
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

alert("End");