/* JawaScript - Ex4_tooltip_my_VsplytieEvents               
Напишите JS-код, реализующий поведение «подсказка».

При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка 
и скрываться при переходе на другой элемент.

    -Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
    -Подсказка должна быть, по возможности, посередине элемента.
    -Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
    -Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
*/
'use strict';
alert("Start Ex4_tooltip_my_VsplytieEvents");


let tip; // создадим переменную для єлемента подсказки глобально (проще удалить)
// обработка собьітия при наведении мыши на элемент
document.addEventListener('mouseover', function(event) {

    switch(event.target.dataset.tooltip) {
        case "эта подсказка должна быть длиннее, чем элемент": {
            // создать елемент подсказку для data-tooltip="эта подсказка должна быть длиннее, чем элемент"
            getTip(event);
        }
        break;
        case "HTML<br>подсказка": {
            // создать елемент подсказку для data-tooltip="HTML<br>подсказка"
            getTip(event);
        }
        break;
    }
});

// обработка собьітия при уходе курсора с элемента
document.addEventListener('mouseout', function(event) {

    switch(event.target.dataset.tooltip) {
        case "эта подсказка должна быть длиннее, чем элемент": {
            removeTip();
        }
        break;
        case "HTML<br>подсказка": {
            removeTip();
        }
        break;
    }
});

// создать елемент-подсказку
function getTip(event) {
    // создать елемент подсказку
    tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.innerHTML = event.target.dataset.tooltip;
    document.body.append(tip); //tip.style.backgroundColor = 'blue';

    //позиционировать елемент подсказку
    let button = event.target;
    let buttonCoords = button.getBoundingClientRect();

    let left = buttonCoords.left - (tip.offsetWidth - button.offsetWidth)/2;
    left = ( left < 0 )? 0: left;   // якщо лівіше лівого краю екрану
    tip.style.left = left + 'px';

    let top = buttonCoords.top - tip.offsetHeight - 5;
    top = (top < 0)? buttonCoords.bottom + 5: top;  // якщо вище верхнього краю екрану
    tip.style.top = top + 'px';
}

 // удалить елемент-подсказку
function removeTip(event) { // event - на всякий случай, для расширения кода
    if (tip) {
        tip.remove();
        tip = null;
    }
}

alert("End");