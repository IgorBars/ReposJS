/* JawaScript - Ex2_UpButton_pageYOffset_scrollTop_scrollINTERFACEevents               Бесконечная страница

Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.

Она должна работать следующим образом:

Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. 
Если страница прокручивается назад, стрелка исчезает.
Когда нажимается стрелка, страница прокручивается вверх.

window.pageYOffset    - скрьітая верхняя часть html-документа
*/

'use strict';
alert("Start Ex2_UpButton_pageYOffset_scrollTop_scrollINTERFACEevents");


let matrix = document.getElementById('matrix');
let arrowTop = document.getElementById('arrowTop');

window.addEventListener('scroll', function() {
  arrowTop.hidden = (window.pageYOffset < document.documentElement.clientHeight - 100); // если верхняя скрьітая часть меньше вьісотьі окна бр
});                                                                           // 100  - накладка на 4 строки


arrowTop.onclick = function() {
  window.scrollTo(window.pageXOffset, 0);   // с сохранением текущего зн X-прокрутки
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};


alert("End");