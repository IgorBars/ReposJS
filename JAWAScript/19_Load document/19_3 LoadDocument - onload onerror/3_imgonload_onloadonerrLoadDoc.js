/* JawaScript - 3_imgonload_onloadonerrLoadDoc               img.onload

События load и error также срабатывают и для других ресурсов, а вообще, для любых ресурсов, у которых есть внешний src.

Большинство ресурсов начинают загружаться после их добавления в документ. За исключением тега <img>. 
Изображения начинают загружаться, когда получают src (*).

Для <iframe> событие load срабатывает по окончании загрузки как в случае успеха, так и в случае ошибки.
*/

'use strict';
alert("Start 3_imgonload_onloadonerrLoadDoc");


let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif"; // (*)   (начало загрузки для img)
document.body.append(img);                   //      (начало загрузки для большинства ресурсов)

img.onload = function() {
  alert(`Изображение загружено, размеры ${img.width}x${img.height}`);
};

img.onerror = function() {
  alert("Ошибка во время загрузки изображения");
};




alert("End");