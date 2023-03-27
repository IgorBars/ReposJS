/* JawaScript - Ex5_messages_forEach_BrowserEventsEvents               

Есть список сообщений.
При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
*/
'use strict';
alert("Start Ex5_messages_forEach_BrowserEventsEvents");


// найдем и клонируем елемент кнопки
let input0 = document.querySelector('.remove-button');

let input1 = input0.cloneNode(true);
input0.after(input1);

let input2 = input0.cloneNode(true);
input1.after(input2);

let inputs = [input0, input1, input2]; // массив кнопок

let panes = document.querySelectorAll('.pane'); // массив елементов-заметок

// добавляем кнопку в заметку, а также собьітие для нее 
inputs.forEach((input, index) => { panes[index].prepend(input); //this.offsetParent "position: relative" 
    // input.onclick = () => panes[index].style.display = 'none';
    input.addEventListener('click', () => panes[index].style.display = 'none');
});




alert("End");