/* JawaScript - 1_ball_DragAndDropInterfaceevents               Алгоритм Drag’n’Drop

Базовый алгоритм Drag’n’Drop выглядит так:

    - При mousedown – готовим элемент к перемещению, если необходимо (например, создаём его копию).
    - Затем при mousemove передвигаем элемент на новые координаты путём смены left/top и position:absolute.
    - При mouseup – остановить перенос элемента и произвести все действия, связанные с окончанием Drag’n’Drop.

*/

'use strict';
alert("Start 1_ball_DragAndDropInterfaceevents");





let field = document.getElementById('field');
let fieldCoords = field.getBoundingClientRect();

let ball = document.getElementById('ball');
ball.style.width = '30px';                    // добавим атрибуты width/height тегу <img>(ведь катинка из инета)
ball.style.height = '30px';


ball.onmousedown = function(event) { // (1) отследить нажатие

    let shiftX = event.clientX - ball.getBoundingClientRect().left; // смещение по мячу до места его захвата курсором
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    // (2) подготовить к перемещению:
    // разместить поверх остального содержимого и в абсолютных координатах
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(ball);
    // и установим абсолютно спозиционированный мяч под курсор
  
    moveAt(event.pageX, event.pageY);
  
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
        if(pageX > fieldCoords.left + fieldCoords.width - field.clientLeft - ball.offsetWidth + shiftX) {  // ограничение полем справа
            pageX = fieldCoords.left + fieldCoords.width - field.clientLeft - ball.offsetWidth + shiftX;
        }
        if(pageX < fieldCoords.left + field.clientLeft + shiftX) {                                         // ограничение полем слева
            pageX = fieldCoords.left + field.clientLeft + shiftX;
        }
        if(pageY < fieldCoords.top + field.clientTop + shiftY) {                                            // ограничение полем сверху
            pageY = fieldCoords.top + field.clientTop + shiftY;
        }
        if(pageY > fieldCoords.top + fieldCoords.height - field.clientLeft - ball.offsetHeight + shiftY) {  // ограничение полем снизу
            pageY = fieldCoords.top + fieldCoords.height - field.clientLeft - ball.offsetHeight + shiftY;
        }

      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (3) перемещать по экрану (обработчик собьітия 'mousemove')
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) положить мяч, удалить более ненужные обработчики событий (обработчик собьітия 'mouseup')
    document.addEventListener('mouseup', onMouseUp);

    function onMouseUp() {
        // document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    };
};

// отключаем встроенньій в браузере Drag and Drop 
ball.ondragstart = function() { 
    return false;
};


alert("End");