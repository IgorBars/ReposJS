/* JawaScript - Ex1_slider_DragAndDropInterfaceevents               
Создайте слайдер:
Важные детали:

    - Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. 
        При этом бегунок должен останавливаться чётко в нужном конце полосы.
    - При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя).
*/

'use strict';
alert("Start Ex1_slider_DragAndDropInterfaceevents");


let slider = document.getElementById('slider');
let thumb = slider.querySelector('.thumb');

let sliderCoords = slider.getBoundingClientRect();
let thumbCoords = thumb.getBoundingClientRect();

thumb.addEventListener('mousedown', function(event) {

    let shiftX = event.clientX - thumb.getBoundingClientRect().left; // смещение по thumb до места его захвата курсором
    // let shiftY = event.clientY - thumb.getBoundingClientRect().top;

    // (1) подготовка thumb для DragAndDrop
    thumb.style.position = 'absolute';
    thumb.style.zIndex = 1000;
    // переместим в body, чтобы thumb был точно не внутри position:relative
    document.body.append(thumb);

    // (2) установим абсолютно спозиционированный thumb под курсор
    moveAt(event.pageX);

    function moveAt(pageX) {
        if(pageX < sliderCoords.left + shiftX) {pageX = sliderCoords.left + shiftX}
        if(pageX > sliderCoords.right - thumbCoords.width + shiftX) {pageX = sliderCoords.right - thumbCoords.width + shiftX}
        thumb.style.left = pageX - shiftX + 'px';
        thumb.style.top = sliderCoords.top - (thumbCoords.height - sliderCoords.height)/2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }

    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
    // (4) отпустить thumb, удалить более ненужные обработчики событий
    document.addEventListener('mouseup', onMouseUp);

    function onMouseUp() {
        // document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    };
})

// отключаем встроенньій в браузере Drag and Drop для єлемента thumb
thumb.ondragstart = function() { 
    return false;
};


alert("End");
