/* JawaScript - 1_getBoundingClientRect_CoordinatesDocument         elem.getBoundingClientRect()

Большинство соответствующих методов JavaScript работают в одной из двух указанных ниже систем координат:

    - Относительно окна браузера – как position:fixed, отсчёт идёт от верхнего левого угла окна.
        Будем обозначать эти координаты как clientX/clientY
    
    - Относительно документа – как position:absolute на уровне документа, отсчёт идёт от верхнего левого угла документа.
        Будем обозначать эти координаты как pageX/pageY.

Когда страница полностью прокручена в самое начало, то верхний левый угол окна совпадает с левым верхним углом документа, 
при этом обе этих системы координат тоже совпадают. Но если происходит прокрутка, то координаты элементов в контексте окна 
меняются, так как они двигаются, но в то же время их координаты относительно документа остаются такими же.


- elem.getBoundingClientRect() возвращает координаты в контексте окна для минимального по размеру прямоугольника, 
который заключает в себе элемент elem, в виде объекта встроенного класса DOMRect.


Основные свойства объекта типа DOMRect:

- x/y – X/Y-координаты начала прямоугольника относительно окна,
- width/height – ширина/высота прямоугольника (могут быть отрицательными).

Дополнительные, «зависимые», свойства:
- top/bottom – Y-координата верхней/нижней границы прямоугольника,
- left/right – X-координата левой/правой границы прямоугольника.

<style>
    #example {
      padding: 20px;
      overflow: auto;
    }
    .main {background-color: aqua;}
</style>
<body>
    <input id="input" type="button" onclick="getCoords(this)" value="Координатьі относительно окна">
                                ...
*/

'use strict';
alert("Start 1_getBoundingClientRect_CoordinatesDocument");


// let input = document.getElementById('input');

function getCoords(elem) {
    let r = elem.getBoundingClientRect();

    alert(`x:${r.x}
y:${r.y}
width:${r.width}
height:${r.height}
top:${r.top}
bottom:${r.bottom}
left:${r.left}
right:${r.right}
`);
}




alert("End");