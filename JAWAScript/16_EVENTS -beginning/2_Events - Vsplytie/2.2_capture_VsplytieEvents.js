/* JawaScript - 2.2_capture_VsplytieEvents             capture

Каждый обработчик имеет доступ к свойствам события event:

    - event.target – самый глубокий элемент, на котором произошло событие.
    - event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
    - event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).

Обработчики, добавленные через on<event>-свойство или через HTML-атрибуты, или через addEventListener(event, handler) с двумя аргументами, 
ничего не знают о фазе погружения, а работают только на 2-ой и 3-ей фазах.

Чтобы поймать событие на стадии погружения, нужно использовать третий аргумент capture вот так:

    - elem.addEventListener(..., {capture: true})
      // или просто "true", как сокращение для {capture: true}
    -   elem.addEventListener(..., true)

Существуют два варианта значений опции capture:

    - Если аргумент false (по умолчанию), то событие будет поймано при всплытии.
    - Если аргумент true, то событие будет перехвачено при погружении.
*/

'use strict';
alert("Start 2.2_capture_VsplytieEvents");


for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
}

alert("End");