/* JawaScript - Ex4_gallery_circle_EventsGenerationEvents               
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

Добавьте пользовательское собьітие: при клике на основном изображении - смена изображений в цикле (слайдовьій показ)
*/

'use strict';
alert("Start Ex4_gallery_circle_EventsGenerationEvents");


// let ulThumbs = document.querySelector('#thumbs');
let ulThumbs = document.getElementById('thumbs');
let largeImg = document.getElementById('largeImg');
let aArr = ulThumbs.querySelectorAll('a');

ulThumbs.onclick = function(event) {
    let aEl = event.target.closest('a');                // ближайший а-родитель для event.target (кликнутого елемента)
    if ( !aEl ) return;                                //  aEl.style.backgroundColor = 'blue'; // проверка перехвата вспльітия на теге 'A

    shouLageEl(aEl);

    event.preventDefault();
}

function shouLageEl(thumbsEl) {
    let href = thumbsEl.getAttribute('href');    //alert( href );
    let title = thumbsEl.getAttribute('title');   //alert( title );
    largeImg.src = href;
    largeImg.alt = title;
}

// циклический показ/останов на largeImg

let circleClick = new CustomEvent('click', {bubbles: true});  // пользовательское собьітие 'click'
let links = ulThumbs.querySelectorAll('a');
let stop = true;
let timerId;
let counter = 0;

largeImg.addEventListener('click', function(event) {    // обработчик на largeImg запускает/останавливает показ слайдов
    let a = event.target.closest('a');
    if ( !a ) return;
    event.preventDefault();                              // отменяем отработку onclick на largeImg по умолчанию

    stop = !stop;                                       // разделяем пуск/пауза
    if (stop == true) {
        clearInterval(timerId); 
        return;
    }

    timerId = setInterval(() => {
        links[counter].dispatchEvent(circleClick);       // вьізьіваем пользовательское собьітие 'click' на каждой ссьілке
        counter = (counter < links.length - 1) ? counter + 1 : 0;
        }, 1000);
})


alert("End");