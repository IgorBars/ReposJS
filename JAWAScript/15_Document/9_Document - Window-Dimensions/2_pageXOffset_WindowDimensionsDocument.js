/* JawaScript - 2_pageXOffset_WindowDimensionsDocument         window.pageXOffset/pageYOffset
Обычные элементы хранят текущее состояние прокрутки в elem.scrollLeft/scrollTop.
В большинстве браузеров мы можем обратиться к documentElement.scrollLeft/Top

Гарантированно текущую прокрутку можно прочитать из свойств window.pageXOffset/pageYOffset
(Эти свойства доступны только для чтения)


<style>
    #example {
      width: 300px;
      height: 200px;
      border: 25px solid #E8C48F;
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
*/

'use strict';
alert("Start 2_pageXOffset_WindowDimensionsDocument");

alert('Текущая прокрутка снизу: ' + (document.documentElement.scrollHeight - window.pageYOffset));
alert('Текущая прокрутка слева: ' + window.pageXOffset);
  
alert('Полная высота документа с прокручиваемой частью: ' + document.documentElement.scrollHeight);//Полная высота документа с прокручиваемой частью: 722


alert("End");