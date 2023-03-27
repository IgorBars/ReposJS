/* JawaScript - Ex3_ball2_BrowserEventsEvents               

Вариант с широкой активной (для кликов) декоративной рамкой вокруг поля 
*/

'use strict';
alert("Start Ex3_ball2_BrowserEventsEvents");

let field = document.getElementById('field');
let field1 = document.getElementById('field1'); // дополнительное активное поле (ДАП)

let ball = document.getElementById('ball');
ball.style.width = '30px';                    // добавим атрибуты width/height тегу <img>(ведь катинка из инета)
ball.style.height = '30px';

// У нас есть значения event.clientX/clientY – координаты нажатия мышки относительно окна браузера;
// (event.clientY = fieldCoords.top + top) fieldCoords.top -координата Y field отн окна, top -координата Y мяча отн поля

// Чтобы получить значение left для мяча после нажатия мышки относительно поля,
//  мы должны из координаты нажатия мышки вычесть координату левого края поля и ширину границы:

let cursorLeftOnField;      // координатьі курсора относительно field (внутри рамок-границ)
let cursorTopOnField;

let ballLeftOnField;        // координатьі позиционирования ball
let ballTopOnField;


function fieldClickHendler(event) {

    // координаты елемента field каждьій клик (прокрутка учитьівается здесь! )
    let fieldCoords = field.getBoundingClientRect();    // координаты смещенного елемента field в контексте окна (не документа)
    let fieldCoords1 = field1.getBoundingClientRect();  // координаты ДАП

    // координатьі курсора относительно внутренней части ДАП (внутри рамок-границ)
    // alert(event.clientX + ': ' + event.clientY); // (event.clientX -коорд курсора отн окна)
    cursorLeftOnField = Math.round(event.clientX - fieldCoords1.left - field1.clientLeft); // (field.clientLeft - ширина лев границьі)
    cursorTopOnField = Math.round(event.clientY - fieldCoords1.top - field1.clientTop);

        // поправка координат курсора на смещение внутреннего поля field относительно внешнего ДАП:
    cursorLeftOnField -= (field1.offsetWidth - field.offsetWidth)/2;
    cursorTopOnField -= (field1.offsetHeight - field.offsetHeight)/2;

    // обработка координат на краю поля (недоход мяча до рамок-границ)
    if (cursorLeftOnField < ball.offsetWidth/2) {
        cursorLeftOnField = ball.offsetWidth/2;

    } else if ( cursorLeftOnField > (fieldCoords.width - field.clientLeft*2 - ball.offsetWidth/2) ) {
        cursorLeftOnField = fieldCoords.width - field.clientLeft*2 - ball.offsetWidth/2;
    }

    if (cursorTopOnField < ball.offsetHeight/2) {
        cursorTopOnField = ball.offsetHeight/2; // - 10 -заход за границу, + 10 -недоход
        
    } else if (cursorTopOnField > fieldCoords.height - field.clientLeft*2 - ball.offsetHeight/2) {
        cursorTopOnField = fieldCoords.height - field.clientLeft*2 - ball.offsetHeight/2;
    }

    // координатьі позиционирования ball
    ballLeftOnField = Math.round(cursorLeftOnField - ball.offsetWidth/2);  // (ball.offsetWidth -ширина мяча)
    ballTopOnField = Math.round(cursorTopOnField - ball.offsetHeight/2);  

    // позиционирование ball
    ball.style.left = ballLeftOnField + 'px';
    ball.style.top = ballTopOnField + 'px';
}

field1.addEventListener('click', fieldClickHendler);




alert("End");