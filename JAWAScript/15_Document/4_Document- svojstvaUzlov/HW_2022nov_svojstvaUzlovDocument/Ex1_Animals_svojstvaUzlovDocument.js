/* JawaScript - Ex1_Animals_svojstvaUzlovDocument
У нас есть дерево, структурированное как вложенные списки ul/li.
Напишите код, который выведет каждый элемент списка <li>:
    - Какой в нём текст (без поддерева) ?
    - Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

'use strict';
alert("Start Ex1_Animals_svojstvaUzlovDocument");


let elements = document.querySelectorAll('ul > li'); //   (все li во всех ul)

for (let elem of elements) {

    // 1-й елемент Nod-коллекції елемента elem (текстовий Nod-елемент, не вузол)
    let el = elem.childNodes[0];
    // let el = elem.firstChild;

    // alert(el.textContent);
    alert(el.data);

    // число потомков (вместе с названиями подразделов)
    let count = elem.querySelectorAll('li').length;
    alert(count);
}


alert("End");