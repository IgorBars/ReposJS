/* JawaScript - Ex3_gallery1_BrowseractionsEvents               
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
*/

'use strict';
alert("Start Ex3_gallery1_BrowseractionsEvents");                                                       // ТРЕНИНГ


let thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(event) {

    let target = event.target.closest('A');
    if (!target) return;

    showLargeImg(target);   // передаем в аргументе елемент target с нужньіми атроибутами

    event.preventDefault();
});

function showLargeImg(targ) {

    let link = targ.getAttribute('href');
    let title = targ.getAttribute('title');

    let largeImg = document.getElementById('largeImg');
    largeImg.setAttribute('src', link);
    // largeImg.src = link;
    largeImg.setAttribute('alt', title);
    // largeImg.alt = title;
}

alert("End");