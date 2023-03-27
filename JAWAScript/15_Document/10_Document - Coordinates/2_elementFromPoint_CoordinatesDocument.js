/* JawaScript - 2_elementFromPoint_CoordinatesDocument         document.elementFromPoint(x, y)

Вызов document.elementFromPoint(x, y) возвращает самый глубоко вложенный элемент в окне, находящийся по координатам (x, y).

Синтаксис:

let elem = document.elementFromPoint(x, y);




<style>
    #example {
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
<body>
                                ...
*/

'use strict';
alert("Start 2_elementFromPoint_CoordinatesDocument");


let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = "red";
alert(elem.tagName);



alert("End");