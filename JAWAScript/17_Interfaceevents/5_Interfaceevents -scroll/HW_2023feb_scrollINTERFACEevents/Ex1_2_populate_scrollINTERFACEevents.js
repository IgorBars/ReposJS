/* JawaScript - Ex1_2_populate_scrollINTERFACEevents               Бесконечная страница

*/

'use strict';
alert("Start Ex1_2_populate_scrollINTERFACEevents");


let end = document.getElementById('end');

function populate() {

      let endRelativeTop = end.getBoundingClientRect().top;     // визначаємо положення верхнього краю порожньої кінцевої області     
      
      // прокручивая, приближаем верхнюю границу пустого DIV к границе появления
      if (endRelativeTop <= document.documentElement.clientHeight - 100) {

        end.insertAdjacentHTML('beforebegin', `<p>Дата: ${new Date()}</p>`);  // добавим больше данных в видимой области
      }
}

window.addEventListener('scroll', populate);

populate();



alert("End");