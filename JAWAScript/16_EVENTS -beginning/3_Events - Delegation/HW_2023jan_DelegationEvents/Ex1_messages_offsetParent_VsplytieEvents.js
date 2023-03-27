/* JawaScript - Ex1_messages_offsetParent_VsplytieEvents               
Спрячьте сообщения с помощью делегирования

Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.
*/
'use strict';
alert("Start Ex1_messages_offsetParent_VsplytieEvents");


let container = document.getElementById('container');

container.addEventListener('click', function(event) {

    let id = event.target.dataset.toggleId; // "subscribe-pane"

    if (!id) return;

    if (id == "subscribe-pane") {           
        let removeButton = event.target;    // кнопка удаления
        // event.target.style.backgroundColor = 'red';
        //offsetParent -ближайший родитель для removeButton с условием "position: relative <=> position: absolute"
        let subscrDiv = removeButton.offsetParent;  // удаляемьій DIV -ближайший родитель
        subscrDiv.style.display = 'none';
    }
})





alert("End");