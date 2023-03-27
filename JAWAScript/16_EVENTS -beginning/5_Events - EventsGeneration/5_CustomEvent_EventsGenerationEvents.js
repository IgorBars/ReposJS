/* JawaScript - 5_CustomEvent_EventsGenerationEvents               

Для пользовательских событий стоит применять конструктор CustomEvent.

Для генерации событий совершенно новых типов, таких как "hello", следует использовать конструктор new CustomEvent.
У второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в событие.
*/

'use strict';
alert("Start 5_CustomEvent_EventsGenerationEvents");


// дополнительная информация приходит в обработчик вместе с событием
let elem = document.getElementById('elem');
elem.addEventListener("hello", function(event) {    
    alert(event.detail.name);
});

elem.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "Вася" }
}));


// Свойство detail может содержать любые данные. Надо сказать, что никто не мешает и в обычное new Event записать любые свойства. 
// Но CustomEvent предоставляет специальное поле detail во избежание конфликтов с другими свойствами события.

alert("End");