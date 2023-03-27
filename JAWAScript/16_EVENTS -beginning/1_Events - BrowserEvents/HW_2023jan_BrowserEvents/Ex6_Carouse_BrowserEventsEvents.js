/* JawaScript - Ex6_Carouse_BrowserEventsEvents               

Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
*/
'use strict';
alert("Start Ex6_Carouse_BrowserEventsEvents");


// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let i = 1; let spans = [];
for(let li of document.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    
    //найти и работать с елементами span
    // spans[i-1] = document.querySelectorAll('span')[i-1];
    // spans[i-1].style.left = 0; spans[i-1].style.top = 0; spans[i-1].style.backgroundColor = "yellow";

    i++;
}

let width = 130 + 4; // ширина картинки + 4 (місце для span)
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево (стрічка вправо)
  position += width * count;    //  -520  -130 (-390)
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);  // 0: мінімальний зсув стрічки при русі вправо (з заповненим вікном)
  list.style.marginLeft = position + 'px'; alert('position: ' + position + ' ' + 'count: ' + position/width);
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо (стрічка вліво)
  position -= width * count;    //  -390  -780  -1170? (-520)
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  // -width * (listElems.length - count) = -910 (максимальний зсув стрічки при русі вліво (з заповненим вікном)
  position = Math.max(position, -width * (listElems.length - count)); 
  list.style.marginLeft = position + 'px'; alert('position: ' + position + ' ' + 'count: ' + position/width);
};

alert("End");