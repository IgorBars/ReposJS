/* JawaScript - Ex1_3_populate_scrollINTERFACEevents               Бесконечная страница

*/

'use strict';
alert("Start Ex1_3_populate_scrollINTERFACEevents");


let end = document.getElementById('end');

// прокручивая, приближаем верхнюю границу пустого DIV к границе появления (document.documentElement.clientHeight - 100)
function populate() {
  while(end.getBoundingClientRect().top <= document.documentElement.clientHeight - 100) { // если положение верхней границьі пустого DIV приблизилось к границе появления 
      
        end.insertAdjacentHTML('beforebegin', `<h5>Дата: ${new Date()}</h5>`);  // добавим больше данных в видимой области
  }
}

window.addEventListener('scroll', populate);

populate();



alert("End");