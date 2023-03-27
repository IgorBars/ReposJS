/* JawaScript - 1_DOMContentLoaded_PageLoadDoc               DOMContentLoaded

Событие DOMContentLoaded срабатывает на объекте document. Мы должны использовать addEventListener, чтобы поймать его.

В этом примере обработчик DOMContentLoaded запустится, когда документ загрузится, 
так что он увидит все элементы, включая расположенный ниже <img>.
Мы можем применить JavaScript к элементам на данном этапе.

Но он не дожидается, пока загрузится изображение. Поэтому alert покажет нулевой размер.
*/

'use strict';
alert("Start 1_DOMContentLoaded_PageLoadDoc");


function ready() {
  alert('DOM готов');

  // изображение ещё не загружено (если не было закешировано), так что размер будет 0x0
  alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
}

document.addEventListener("DOMContentLoaded", ready);


alert("End");