/* JawaScript - Ex3_ball_BrowserEventsEvents               

Организуйте  перемещение мяча при клике на поле, туда, куда был клик.

Требования:
- Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
- CSS-анимация желательна, но не обязательна;
- Мяч ни в коем случае не должен пересекать границы поля;
- При прокрутке страницы ничего не должно ломаться;

Заметки:
- Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
- Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
*/

'use strict';
alert("Start Ex3_ball_BrowserEventsEvents");

let field = document.getElementById('field');

let ball = document.getElementById('ball');
ball.style.width = '30px';                    // добавим атрибуты width/height тегу <img>(ведь катинка из инета)
ball.style.height = '30px';

// У нас есть значения event.clientX/clientY – координаты нажатия мышки относительно окна браузера;

// После отработки перемещения соответсвие координат клика, поля, его границьі и мяча дорлжно біть таким:
// event.clientY = fieldCoords.top + field.clientTop(ширина верх границьі поля) + top 
// (где fieldCoords.top -координата Y field отн окна, field.clientTop -ширина верх границьі поля, top -координата Y мяча отн поля)
// Тогда искомьіе координатьі мяча Y: top = event.clientY - fieldCoords.top - field.clientTop

// Чтобы получить значение X: left для мяча после нажатия мышки относительно поля,
//  мы должны из координаты нажатия мышки вычесть координату левого края поля и ширину границы

let cursorLeftOnField;      // координатьі курсора относительно field (внутри рамок-границ)
let cursorTopOnField;

let ballLeftOnField;        // координатьі позиционирования ball
let ballTopOnField;


function fieldClickHendler(event) {

    // координаты елемента field при каждом клике каждого положения документав окне браузера (прокрутка учитьівается здесь! )
    let fieldCoords = field.getBoundingClientRect();    // координаты елемента field в контексте окна (не документа)

    // alert(event.clientX + ': ' + event.clientY); // (event.clientX -коорд курсора отн окна)
    cursorLeftOnField = Math.round(event.clientX - fieldCoords.left - field.clientLeft); // (field.clientLeft - ширина лев границьі)
    cursorTopOnField = Math.round(event.clientY - fieldCoords.top - field.clientTop);

    // обработка координат на краю поля (недоход мяча до рамок-границ)
    // Left:
    if (cursorLeftOnField < ball.offsetWidth/2) {

        cursorLeftOnField = ball.offsetWidth/2;

    } else if ( cursorLeftOnField > (fieldCoords.width - field.clientLeft*2 - ball.offsetWidth/2) ) {

        cursorLeftOnField = fieldCoords.width - field.clientLeft*2 - ball.offsetWidth/2;
    }

    // Top:
    if (cursorTopOnField < ball.offsetHeight/2) {
        cursorTopOnField = ball.offsetHeight/2;
        
    } else if (cursorTopOnField > fieldCoords.height - field.clientLeft*2 - ball.offsetHeight/2) {
        cursorTopOnField = fieldCoords.height - field.clientLeft*2 - ball.offsetHeight/2;
    }

    // координатьі мяча с поправкой на ширину мяча 
    ballLeftOnField = Math.round(cursorLeftOnField - ball.offsetWidth/2);  // (ball.offsetWidth -ширина мяча)
    ballTopOnField = Math.round(cursorTopOnField - ball.offsetHeight/2);  
    
    // позиционирование ball
    ball.style.left = ballLeftOnField + 'px';
    ball.style.top = ballTopOnField + 'px';
}

field.addEventListener('click', fieldClickHendler);




alert("End");