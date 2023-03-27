/* JawaScript - 3_bubbles_EventsGenerationEvents               
После того, как объект события создан, мы должны запустить его на элементе, вызвав метод 

    elem.dispatchEvent(event).
*/

'use strict';
alert("Start 3_bubbles_EventsGenerationEvents");


// ловим на document пользовательское собьітие, которое вспльівает
document.addEventListener("hello", function(event) { // (1)
    alert("Привет от " + event.target.tagName); // Привет от H1
});

// запуск вспльівающего пользовательского события на элементе
let eventHello = new Event("hello", {bubbles: true}); // (2)

let elemH1 = document.getElementById('elem');
elemH1.dispatchEvent(eventHello);



// (1) Мы должны использовать addEventListener для наших собственных событий, т.к. on<event>-свойства существуют только для встроенных событий, 
//     то есть document.onhello не сработает.

// (2) Мы обязаны передать флаг bubbles:true, иначе наше событие не будет всплывать.

alert("End");