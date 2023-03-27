/* JawaScript - Ex2_tree3_closest_toggle_VsplytieEvents               
Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

Требования:

    -Использовать только один обработчик событий (применить делегирование)
    -Клик вне текста заголовка (на пустом месте) ничего делать не должен.
*/
'use strict';
alert("Start Ex2_tree3_closest_toggle_VsplytieEvents");


let tree = document.getElementById('tree');

// Оборачиваем текст каждого заголовка дерева в элемент <span> (превращая NOD-ел в DOM-ел). 
// поместить все текстовые узлы в элемент <span>
// он занимает только то место, которое необходимо для текста
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);   // span в начало li (т.е. даже перед #text)
    span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

//  ловим клики на всём дереве
tree.onclick = function(event) {

    if( event.target.tagName != 'SPAN') { //alert("not SPAN!");
        return;
    }

    let liParent = event.target.closest('li');    //closest('li') -поиск ближайшего родителя для SPAN: -тега li

    if (!liParent.querySelector('ul')) return;

    liParent.querySelector('ul').classList.toggle('toggle');    // liParent.children[1] - первьій найденньій child: UL
}

alert("End");