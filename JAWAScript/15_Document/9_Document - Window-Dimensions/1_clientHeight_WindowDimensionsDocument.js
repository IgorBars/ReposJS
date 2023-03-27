/* JawaScript - 1_clientHeight_WindowDimensionsDocument         clientHeight/ clientWidth
Получить в JS ширину и высоту окна браузера, полную ширину и высоту документа, включая прокрученную часть,
 прокрутить страницу с помощью JavaScript можно из document.documentElement, который соответствует тегу <html>:

    - documentElement.clientHeight  - высота окна
    - documentElement.clientWidth   - ширина окна

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
alert("Start 1_clientHeight_WindowDimensionsDocument");

alert(document.documentElement.clientHeight);   // 722  (ширина окна за вычетом полосы прокрутки)


let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
  
alert('Полная высота документа с прокручиваемой частью: ' + scrollHeight);//Полная высота документа с прокручиваемой частью: 722


alert("End");