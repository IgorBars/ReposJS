/* JawaScript - 2_dispatchEvent_EventsGenerationEvents               
После того, как объект события создан, мы должны запустить его на элементе, вызвав метод 

    elem.dispatchEvent(event).

<button id="elem" onclick="alert('Клик!'); alert(event.isTrusted);">Автоклик</button>
*/

'use strict';
alert("Start 2_dispatchEvent_EventsGenerationEvents");




let elem = document.getElementById('elem');

let eventClick = new Event("click");        // создаем пользовательское собьітие, содержащее именно стандартньій click (click - имя собьітия)

elem.dispatchEvent(eventClick);  // вьізьіваем пользовательское собьітие на елементе, а именно стандартньій click (eventClick -переменная с собьітием click)



// Можно легко отличить «настоящее» событие от сгенерированного кодом.
// Свойство event.isTrusted принимает значение true для событий, порождаемых реальными действиями пользователя, и false для генерируемых кодом.


alert("End");