/* JawaScript - 4_window_scrollTo_WindowDimensionsDocument         window.scrollTo(pageX,pageY)

Метод scrollTo(pageX,pageY) прокручивает страницу на абсолютные координаты (pageX,pageY).
Для прокрутки в самое начало мы можем использовать scrollTo(0,0).

<style>
    #example {
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
*/

'use strict';
alert("Start 4_window_scrollTo_WindowDimensionsDocument");

// document.documentElement.scrollTop += 30;


window.scrollTo(0,50);  // чомусь прокручує тільки у перше відкриття файлу

let timerId2 = setTimeout(() => window.scrollTo(0,50), 3000);

alert("End");