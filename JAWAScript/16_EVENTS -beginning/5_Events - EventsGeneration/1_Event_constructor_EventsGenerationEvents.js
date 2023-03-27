/* JawaScript - 1_Event_constructor_EventsGenerationEvents               
Встроенные классы для событий формируют иерархию аналогично классам для DOM-элементов. Её корнем является встроенный класс Event.

Событие встроенного класса Event можно создать так:

let event = new Event(type[, options]);

Где:

    - type – тип события, строка, например "click" или же любой придуманный нами – "my-event".

    - options – объект с тремя необязательными свойствами:

        - bubbles: true/false – если true, тогда событие всплывает.
        - cancelable: true/false – если true, тогда можно отменить действие по умолчанию. Позже мы разберём, что это значит для пользовательских событий.
        - composed: true/false – если true, тогда событие будет всплывать наружу за пределы Shadow DOM. Позже мы разберём это в разделе Веб-компоненты.

По умолчанию все три свойства установлены в false: {bubbles: false, cancelable: false, composed: false}.
*/

'use strict';
alert("Start 1_Event_constructor_EventsGenerationEvents");





alert("End");