/* JawaScript - Ex2_gallery_circle_EventsGenerationEvents               
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

Добавьте пользовательское собьітие: при клике на основном изображении - смена изображений в цикле (слайдовьій показ) с возможностью постановки на паузу
*/

'use strict';
alert("Start Ex2_gallery_circle_EventsGenerationEvents");


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
let next = new CustomEvent('next', {                  // об'ьявление пользовательского собьітия циклической сменьі
    // bubbles: true
});

largeImg.addEventListener('click', function(event) { // обработчик клика на largeImg запускает пользовательское собьітие
    let aEl = event.target.closest('a');
    if ( !aEl ) return;
    
    largeImg.dispatchEvent(next);                    // навешиваем пользовательское собьітие на largeImg    (largeImg.dispatchEvent(next) == true)
    event.preventDefault();                          // отменяем отработку onclick по умолчанию
})

largeImg.addEventListener('next', function(event) { // обработчик пользовательского собьітия циклической сменьі
    
    if (stop == true) {
        clearInterval(timerId); 
        stop = false;
        return;
    }

    timerId = setInterval(() => {
        shouLageEl(aArr[i]);
        i = (i >= aArr.length - 1)? -1: i;
        i++;
        stop = true;
    }, 1000);
})



alert("End");