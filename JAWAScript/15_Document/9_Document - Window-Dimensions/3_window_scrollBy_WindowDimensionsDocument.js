/* JawaScript - 3_window_scrollBy_WindowDimensionsDocument         window.scrollBy(x,y)

Метод scrollBy(x,y) прокручивает страницу относительно её текущего положения.

(Обычные элементы можно прокручивать, изменяя scrollTop/scrollLeft.)
(Мы можем сделать то же самое для страницы в целом, используя document.documentElement.scrollTop/Left (кроме основанных на старом WebKit (Safari), где, как сказано выше, document.body.scrollTop/Left)).

Есть и другие способы, в которых подобных несовместимостей нет: специальные методы window.scrollBy(x,y) и window.scrollTo(pageX,pageY).
Например, scrollBy(0,10) прокручивает страницу на 10px вниз.

<style>
    #example {
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
*/

'use strict';
alert("Start 3_window_scrollBy_WindowDimensionsDocument");

// document.documentElement.scrollTop += 30;
// alert(document.documentElement.scrollTop);
window.scrollBy(0,50);    // чомусь прокручує тільки у перше відкриття файлу (при перезавантаженні - ні)

let timerId2 = setTimeout(() => window.scrollBy(0,50), 3000);

alert("End");