/* JawaScript - Ex1_messages_closest_VsplytieEvents               
Спрячьте сообщения с помощью делегирования

Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.
*/
'use strict';
alert("Start Ex1_messages_closest_VsplytieEvents");


let container = document.getElementById('container');

container.onclick = function(event) {

    if (event.target.className != 'remove-button') return;  // className учитьівает весь перечень классов!!!

        let pane = event.target.closest('.pane');           //closest('.pane') -поиск ближайшего родителя с классом pane
        
        pane.style.display = 'none';
//         // pane.remove(); 
};






alert("End");