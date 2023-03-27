/* JawaScript - Ex2_UpButton_scrollY_scrollINTERFACEevents               Бесконечная страница

Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.

Она должна работать следующим образом:

Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. 
Если страница прокручивается назад, стрелка исчезает.
Когда нажимается стрелка, страница прокручивается вверх.

window.scrollY                      - скрьітая верхняя часть html-документа (только для чтения)
document.documentElement.scrollTop  - скрьітая верхняя часть html-документа (позволяет установку значения)
*/

'use strict';
alert("Start Ex2_UpButton_scrollY_scrollINTERFACEevents");                                          // МОЙ  ВАРИАНТ


let matrix = document.getElementById('matrix');
let arrowTop = document.getElementById('arrowTop');

window.addEventListener('scroll', observer);     // обработчик не на matrix, matrix не имеет прокрутки (в CSS нет свойства height)

function observer() {
    if(window.scrollY >= window.innerHeight) {  //  window.innerWidth/innerHeight включают в себя полосу прокрутки. !!!
        arrowTop.hidden = false;
    } else {
        arrowTop.hidden = true;
    }
}

observer();                                         // начальная установка (скрьітие кнопки пока не прокручен)

arrowTop.addEventListener('click', getUp);

function getUp(event) {
    document.documentElement.scrollTop = 0;       // scrollTop единственньій позволяет установку значения (через себя )
}

alert("End");