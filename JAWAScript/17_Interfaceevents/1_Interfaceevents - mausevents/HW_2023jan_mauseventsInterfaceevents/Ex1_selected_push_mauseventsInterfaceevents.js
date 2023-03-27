/* JawaScript - Ex1_selected_push_mauseventsInterfaceevents               
Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

    -При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
    -Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.

P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.

P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.
*/

'use strict';
alert("Start Ex1_selected_push_mauseventsInterfaceevents");


let ul = document.getElementById('sel');
let liMemoryArr = [];

ul.onmousedown = function(event) {                // исключаем вьіделение
    // let li = event.target;
    // if(event.target.tagName != "LI") return;
    return false;
};

ul.onclick = function(event) {
    let liTarg = event.target;

    if(event.target.tagName != "LI") {              //alert("not LI!");                  LI !!!!!!!!!!! ТОЛЬКО В ВЕРХНЕМ РЕГИСТРЕ
        alert("target = " + event.target.tagName);
        return;
    } 

    if (event.ctrlKey || event.metaKey) {
        liTarg.classList.toggle('selected');
        if(liTarg.classList.contains('selected')) {
            liMemoryArr.push(liTarg);
        }
    } else {
        clearArr();
        liTarg.classList.add('selected');
        liMemoryArr.push(liTarg);
    }
};

function clearArr() {
    liMemoryArr.forEach( function(item, index, array) {
        item.classList.remove('selected');
    });
    liMemoryArr.length = 0;
}

alert("End");//
