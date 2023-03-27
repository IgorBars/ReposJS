/* JawaScript - Ex6_ShowNumberOfChild_IzmenDokumentaDocument         

Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте.
*/

'use strict';
alert("Start Ex6_ShowNumberOfChild_IzmenDokumentaDocument");



let ul = document.querySelector('ul');



function ShowNumberOfChild(container) {   // приймає вузловий елемент-контейнер ul

    if (!container.children[0].querySelector('ul')) return; // проверка на наличие вложенности
    
    for(let el of container.children) {     // переберемо елементи колекції container

        let ulinner = el.querySelector('ul');
        alert(`${el.firstChild.data}: ${ulinner.children.length}`); //  Животные: 2    Рыбы: 2   (Млекопитающие  Другие) (Аквариумные    Морские)

        ShowNumberOfChild(ulinner);
    }
}

ShowNumberOfChild(ul); 




alert("End");