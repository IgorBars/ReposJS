/* JawaScript - 7_scrollTop_OffsetClientTopDocument         scrollLeft   scrollTop
Свойства scrollLeft/scrollTop – ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.

Другими словами, свойство scrollTop – это «сколько уже прокручено вверх».

В отличие от большинства свойств, которые доступны только для чтения, значения scrollLeft/scrollTop можно изменять, 
и браузер выполнит прокрутку элемента.
*/

'use strict';
alert("Start 7_scrollTop_OffsetClientTopDocument");

let example = document.getElementById('example');

// alert(example.offsetParent.id); // main


alert(example.scrollLeft);      // 0 

alert(example.scrollTop);    // 0  

// распахнуть элемент на всю высоту
let timerId = setInterval(() => example.scrollTop += 20, 1000);

// вернуть обратно
let timerId2 = setTimeout(() => {clearInterval(timerId); example.scrollTop = example.scrollHeight - example.clientHeight}, 7000);
/*
Установка значения scrollTop на 0 или example.scrollHeight прокрутит элемент в самый верх/низ соответственно.
*/
alert("End");scrollBottom