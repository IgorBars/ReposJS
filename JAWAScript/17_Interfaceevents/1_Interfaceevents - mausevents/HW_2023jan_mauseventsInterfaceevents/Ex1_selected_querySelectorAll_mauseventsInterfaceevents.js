/* JawaScript - Ex1_selected_querySelectorAll_mauseventsInterfaceevents               
Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

    -При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
    -Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.

P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.

P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.
*/

'use strict';
alert("Start Ex1_selected_querySelectorAll_mauseventsInterfaceevents");



let ulSel = document.getElementById('sel');

ulSel.onmousedown = function(event) {               // исключаем вьіделение (зажиманием кнопки и двойньім кликом)
    return false;
};

ulSel.onclick = function(event) {
    if(event.target.tagName != 'LI') return;         //   LI !!!!!!!!!!! ТОЛЬКО В ВЕРХНЕМ РЕГИСТРЕ

    let liTarg = event.target;

    if (event.ctrlKey || event.metaKey) {
        liTarg.classList.toggle('selected');

    } else {
        let LiArr = ulSel.querySelectorAll('.selected');
        for (let elLi of LiArr) {
            elLi.classList.remove('selected');
        }
        liTarg.classList.add('selected');
    }
};


alert("End");//
