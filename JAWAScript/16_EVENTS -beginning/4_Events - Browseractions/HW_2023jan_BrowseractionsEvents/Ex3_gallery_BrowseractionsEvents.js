/* JawaScript - Ex3_gallery_BrowseractionsEvents               
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
*/

'use strict';
alert("Start Ex3_gallery_BrowseractionsEvents");


// let ulThumbs = document.querySelector('#thumbs');
let ulThumbs = document.getElementById('thumbs');

ulThumbs.onclick = function(event) {

    let aEl = event.target.closest('a');
    if ( !aEl ) return;                                         //  aEl.style.backgroundColor = 'blue'; // проверка перехвата вспльітия на теге 'A

    shouLageEl(aEl);

    event.preventDefault();
    // return false;
}

function shouLageEl(thumbsEl) {

    let LageImg = document.getElementById('largeImg');
    let href = thumbsEl.getAttribute('href');    //alert( href );
    let title = thumbsEl.getAttribute('title');   //alert( title );
    LageImg.src = href;
    LageImg.alt = title;
}


alert("End");