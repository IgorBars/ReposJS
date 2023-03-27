/* JawaScript - Ex1_preloadImages_onloadonerrLoadDoc               Загрузите изображения с колбэком

Создайте функцию preloadImages(sources, callback), которая загружает все изображения из массива sources и, 
когда все они будут загружены, вызывает callback.
*/

'use strict';
alert("Start Ex1_preloadImages_onloadonerrLoadDoc");                          


function preloadImages(sources, callback) {
  /* ваш код */
  let counter = 0;
  // let images = [];                                 // (если нужен массив рисунков)

  for (let source of sources) {
    let img = document.createElement('img');
    img.src = source;                               // document.body.append(img); (проверка загрузки в реальном времени)
    img.onload = img.onerror = handler;             // навешаем на каждьій img обработчики onload и onerror (по условию учитьівать успех и ошибку загрузки как успех)
    // images.push(img);                            // (если нужен массив рисунков)
  }
  
  function handler() {                              // "при успешной/ошибочной загрузке ...
    // document.body.append(images[counter]);          // можно воткнуть очередной загруженньій img
    counter++;                                      // ... увеличить значение counter
    if (counter == sources.length) {
      callback();
      // for (let img of images) {                  // теперь можно одномоментно(без подгрузки) добавить ранее загруженньіе рисунки
      //   document.body.append(img);
      // }
    }
  };
}

// ---------- тест ----------

let sources = [
  // "https://en.js.cx/images-load/1.jpg",
  // "https://en.js.cx/images-load/2.jpg",
  // "https://en.js.cx/images-load/3.jpg"
  "https://img3.akspic.ru/crops/9/9/3/9/6/169399/169399-kauai-oblako-rastenie-legkovyye_avtomobili-gora-3840x2160.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random();
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement('img');
    img.src = sources[i];
    widthSum += img.width;
  }
  alert(widthSum);
}

// каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
preloadImages(sources, testLoaded);


alert("End");