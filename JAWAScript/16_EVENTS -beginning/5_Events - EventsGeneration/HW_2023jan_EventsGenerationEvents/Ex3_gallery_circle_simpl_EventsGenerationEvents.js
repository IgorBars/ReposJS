/* JawaScript - Ex3_gallery_circle_simpl_EventsGenerationEvents               
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

Добавьте пользовательское собьітие: при клике на основном изображении - смена изображений в цикле (слайдовьій показ)
*/

'use strict';
alert("Start Ex3_gallery_circle_simpl_EventsGenerationEvents");


// let ulThumbs = document.querySelector('#thumbs');
let ulThumbs = document.getElementById('thumbs');
let largeImg = document.getElementById('largeImg');
let aArr = ulThumbs.querySelectorAll('a');
let stop = false;
let timerId;
let i = 0;

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

// циклический показ

let circleClick = new CustomEvent('click', {bubbles: true});  // пользовательское собьітие 'click' (будет клик на чем-то)
let links = ulThumbs.querySelectorAll('a');

let counter = 0;

setInterval(() => {
links[counter].dispatchEvent(circleClick);                    // вьізьіваем "пользовательский" клик на каждой ссьілке
counter = (counter < links.length - 1) ? counter + 1 : 0;
}, 1000);




alert("End");