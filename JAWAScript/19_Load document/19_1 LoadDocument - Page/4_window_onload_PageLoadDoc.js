/* JawaScript - 4_window_onload_PageLoadDoc               window.onload

Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки, iframe и другие ресурсы. 
Это событие доступно через свойство onload.

В примере ниже правильно показаны размеры картинки, потому что window.onload дожидается всех изображений:

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
*/

'use strict';
alert("Start 4_window_onload_PageLoadDoc");


window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
  alert('Страница загружена');

  // к этому моменту картинка загружена
  alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
};



alert("End");

/*
Событие load на window генерируется, когда страница и все ресурсы загружены. 
Мы редко его используем, потому что обычно нет нужды ждать так долго.

НО используем при работе с iframe ???
*/