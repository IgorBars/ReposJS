/* JawaScript - 5_elem_scrollIntoView_WindowDimensionsDocument         inputUp.scrollIntoView(true)

Метод scrollTo(pageX,pageY) прокручивает страницу на абсолютные координаты (pageX,pageY).
Для прокрутки в самое начало мы можем использовать scrollTo(0,0).

<style>
    #example {
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
<body>
    <input id="inputUp" type="button" onclick="textUp()" value="Прокрутить верх окна">
                        ...
*/

'use strict';
alert("Start 5_elem_scrollIntoView_WindowDimensionsDocument");

let timerId2 = setTimeout(() => window.scrollTo(0,250), 3000);  // начальное позиционирование страницьі



let inputUp = document.getElementById('inputUp');

function textUp() {
    inputUp.scrollIntoView(true);
}

let inputDown = document.getElementById('inputDown');

function textDown() {
    inputDown.scrollIntoView(false);
}




alert("End");