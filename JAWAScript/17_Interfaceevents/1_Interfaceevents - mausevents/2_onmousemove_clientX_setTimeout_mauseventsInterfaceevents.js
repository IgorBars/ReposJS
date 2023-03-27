/* JawaScript - 2_onmousemove_clientX_setTimeout_mauseventsInterfaceevents               

Наведите курсор мыши на поле ввода, чтобы увидеть clientX/clientY
Наведите курсор мыши на поле ввода, чтобы увидеть pageX/pageY

<input onmousemove="this.value=event.clientX+':'+event.clientY" value="Наведи на меня мышь">
<input onmousemove="this.value=event.pageX+':'+event.pageY" value="Наведи на меня мышь">
*/

'use strict';
alert("Start 2_onmousemove_clientX_setTimeout_mauseventsInterfaceevents");


let input = document.querySelector('input');

input.addEventListener('mousemove', function(event) {

    this.value = event.clientX+':'+event.clientY;

    setTimeout(() => this.value="Перемести на мне курсор", 1000);
})




alert("End");