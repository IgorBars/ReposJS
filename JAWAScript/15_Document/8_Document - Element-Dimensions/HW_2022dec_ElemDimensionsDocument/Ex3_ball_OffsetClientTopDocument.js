/* JawaScript - Ex3_ball_OffsetClientTopDocument         

Поместите мяч в центр поля
    - Элемент должен позиционироваться за счёт JavaScript, а не CSS.
    - Код должен работать с любым размером мяча (10, 20, 30 пикселей) 
        и любым размером поля без привязки к исходным значениям.
*/

'use strict';
alert("Start Ex3_ball_OffsetClientTopDocument");


let field = document.getElementById('field');

//Если браузеру неизвестны ширина и высота изображения (из атрибута HTML-тега или CSS-свойств), он считает их равными 0
let ball = document.getElementById('ball');
// ball.style.width = '40px';                    // добавив атрибуты width/height тегу <img>
// ball.style.height = '40px';

ball.style.width = '30px';                    // добавив атрибуты width/height тегу <img>
ball.style.height = '30px';

// Смещение лев верх точки мяча относительно лев верх точки поля  (на средину поля, без учета шириньі мяча):
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

alert(ball.clientHeight);


alert("End");