/* JawaScript - Ex_gallery_EventsGenerationEvents               
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

Добавьте пользовательское собьітие: при клике на основном изображении - смена изображения на следующее
*/

'use strict';
alert("Start Ex_gallery_EventsGenerationEvents");


// let ulThumbs = document.querySelector('#thumbs');
let ulThumbs = document.getElementById('thumbs');
let largeImg = document.getElementById('largeImg');
let aArr = ulThumbs.querySelectorAll('a');
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


let next = new CustomEvent('next', {                  // об'ьявление пользовательского собьітия циклической сменьі
    bubbles: true
});

largeImg.addEventListener('click', function(event) { // обработчик для клика на largeImg запускает пользовательское собьітие
    let aEl = event.target.closest('a');
    if ( !aEl ) return;
    largeImg.dispatchEvent(next);                    // навешиваем пользовательское собьітие на largeImg
    event.preventDefault();                          // отменяем отработку onclick по умолчанию
})

largeImg.addEventListener('next', function(event) { // обработчик для пользовательского собьітия циклической сменьі
    // largeImg.dispatchEvent(event) = !largeImg.dispatchEvent(event);
    shouLageEl(aArr[i]);
    i = (i >= aArr.length - 1)? -1: i;
    i++;
})



alert("End");