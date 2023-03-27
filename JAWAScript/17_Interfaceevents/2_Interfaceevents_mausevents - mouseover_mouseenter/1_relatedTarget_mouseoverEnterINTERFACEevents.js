/* JawaScript - 1_relatedTarget_mouseoverEnterINTERFACEevents               события mouseover и mouseout

Эти события являются особенными, потому что у них имеется свойство relatedTarget. Оно «дополняет» target. 
Когда мышь переходит с одного элемента на другой, то один из них будет target, а другой relatedTarget.

Для события mouseover(заход на target-ел):

    - event.target – это элемент, на который курсор перешёл.
    - event.relatedTarget – это элемент, с которого курсор ушёл (relatedTarget → target).

Для события mouseout(уход с target-ел) наоборот:

    - event.target – это элемент, с которого курсор ушёл.
    - event.relatedTarget – это элемент, на который курсор перешёл (target → relatedTarget).

При переходе сначала происходит mouseout, сразу за ним - mouseover                              !!!

Свойство relatedTarget может быть null.

Это нормально и означает, что указатель мыши перешёл не с другого элемента, а из-за пределов окна браузера. Или же, наоборот, ушёл за пределы окна.

Следует держать в уме такую возможность при использовании event.relatedTarget в своём коде. 
Если, например, написать event.relatedTarget.tagName, то при отсутствии event.relatedTarget будет ошибка.
*/

'use strict';
alert("Start 1_relatedTarget_mouseoverEnterINTERFACEevents");

let container = document.getElementById('container');
container.onmouseover = container.onmouseout = handler;     // навешиваем на container собьітия onmouseover и onmouseout

function handler(event) {                                   // handler -обработчик для onmouseover и onmouseout

  function getName(el) {
    if (!el) return "null";
    return el.className || el.tagName;  // возвр className єлемента ("left-eye"). Если отс, tagName єлемента (DIV, BODY)
  }

  log.value += event.type + ':  ' +
    'target=' + getName(event.target) +
    ',  relatedTarget=' + getName(event.relatedTarget) + "\n";
  log.scrollTop = log.scrollHeight;

  if (event.type == 'mouseover') {
    event.target.style.background = 'pink'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }
}



alert("End");