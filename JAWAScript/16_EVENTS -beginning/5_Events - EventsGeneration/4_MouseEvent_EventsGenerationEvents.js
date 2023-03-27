/* JawaScript - 4_MouseEvent_EventsGenerationEvents               

Специфический конструктор позволяет указать стандартные свойства для данного типа события.

Например, clientX/clientY для события мыши:
*/

'use strict';
alert("Start 4_MouseEvent_EventsGenerationEvents");


let eventMouseEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
});

alert(eventMouseEvent.clientX); // 100

alert("End");