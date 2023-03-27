/* JawaScript - 5_canvas_BlobBinaryDate               

Мы можем создать Blob для изображения, части изображения или даже создать скриншот страницы. 
Что удобно для последующей загрузки куда-либо.

Операции с изображениями выполняются через элемент <canvas>:
    1. Для отрисовки изображения (или его части) на холсте (canvas) используется canvas.drawImage.
    2. Вызов canvas-метода .toBlob(callback, format, quality) создаёт Blob и вызывает функцию callback при завершении.
*/

'use strict';
alert("Start 4_URL_a_click_BlobBinaryDate");


// берём любое изображение
let img = document.querySelector('img');

// создаём <canvas> того же размера
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;                 // alert(canvas.width);     // 1213px
canvas.height = img.clientHeight;               // alert(canvas.height);    // 669px

let context = canvas.getContext('2d');

// копируем изображение в  canvas (метод позволяет вырезать часть изображения)
context.drawImage(img, "1213px", "669px");       // (img, 0, 0)
// мы можем вращать изображение при помощи context.rotate() и делать множество других преобразований

// toBlob является асинхронной операцией, для которой callback-функция вызывается при завершении
canvas.toBlob(function(blob) {                  // передаем созданньій об'ьект blob в аргумент колбека
  
  let link = document.createElement('a');
  link.download = 'example.png';          // принудительная загрузка по ссьілке (а не переход-навигация)

  link.href = URL.createObjectURL(blob);  // после того, как Blob создан, создаем ссьілку на него
  link.click();                           // автоклик по ссьілке для загрузки blob с изображением

  // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
  URL.revokeObjectURL(link.href);
}, 'image/png');


alert("End");

/*
Или если вы предпочитаете async/await вместо колбэка:
let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
*/