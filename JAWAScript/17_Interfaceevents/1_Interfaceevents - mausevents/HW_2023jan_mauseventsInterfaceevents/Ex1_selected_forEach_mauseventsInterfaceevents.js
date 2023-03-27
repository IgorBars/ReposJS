/* JawaScript - Ex1_selected_forEach_mauseventsInterfaceevents               
Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

    -При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
    -Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.

P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.

P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.
*/

'use strict';
alert("Start Ex1_selected_forEach_mauseventsInterfaceevents");                                     // ТРЕНИНГ



let ulSel = document.getElementById('sel');

ulSel.onmousedown = function(event) {return false;};

ulSel.addEventListener('click', function(event) {
    if ( !event.target.closest('li') ) return;

    let liSel = event.target;

    if (event.ctrlKey || event.metaKey) {
        liSel.classList.toggle('selected');

    } else {
        let liSelArr = ulSel.querySelectorAll('.selected');             // массив елементов li с классом selected
        liSelArr.forEach(item => item.classList.remove('selected'));    // у єлементов li массива liSelArr удалить класс selected
        liSel.classList.add('selected');
    }
}) 



alert("End");//
