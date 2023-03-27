/* JawaScript - Ex3_placeholder_page_scrollINTERFACEevents               Загрузка видимых изображений

Допустим, у нас есть клиент с низкой скоростью соединения, и мы хотим сэкономить его трафик.

Для этого мы решили не показывать изображения сразу, а заменять их на «макеты», как тут:

<img src="placeholder.svg" width="128" height="128" data-src="real.jpg">

То есть, изначально, все изображения – placeholder.svg. Когда страница прокручивается до того положения, 
где пользователь может увидеть изображение – мы меняем src на значение из data-src, и таким образом изображение загружается.

Требования:

При загрузке страницы те изображения, которые уже видимы, должны загружаться сразу же, не ожидая прокрутки.
Некоторые изображения могут быть обычными, без data-src. Код не должен касаться их.
Если изображение один раз загрузилось, оно не должно больше перезагружаться при прокрутке.
P.S. Если можете, реализуйте более продвинутое решение, которое будет загружать изображения на одну страницу ниже/после текущей позиции.

P.P.S. Достаточно обрабатывать вертикальную прокрутку, горизонтальную не требуется.placeholder.svg
*/

'use strict';
alert("Start Ex3_placeholder_page_scrollINTERFACEevents");

/**
 * ОТРАБОТКА: img начинают подгружаться на страницу ниже/вьіше от текущего месторасположения 
 */

// Вариант проверки, считающий элемент видимым,
// если он не более чем -1 страница назад или +1 страница вперед.

function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let extendedTop = -windowHeight;
  let extendedBottom = 2 * windowHeight;

  let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
  let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

  return topVisible || bottomVisible;
}


function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;                    // если есть ссьілка на оригинальное изображение (для незагруженньіх)
    if (!realSrc) continue;                           // перескок итерации цикла для img.dataset.src == ''

    if (isVisible(img)) {                             // если єлемент заходит в область видимости (для незагруженньіх)
      // отключение кеширования

      // эта строка должна быть удалена в "боевом" коде
      // realSrc += '?nocache=' + Math.random();

      img.src = realSrc;                              // замена ссьілки placeholder на оригинальную (момент начала загрузки img)

      img.dataset.src = '';                           // обнуляем dataset чтобьі в сл раз не обрабатьівать єлемент
    }
  }

}

window.addEventListener('scroll', showVisible);
showVisible();


alert("End");