/* JawaScript - Ex6_2_ShowNumberOfChild_IzmenDokumentaDocument         

Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте.
*/

'use strict';
alert("Start Ex6_2_ShowNumberOfChild_IzmenDokumentaDocument");



let lis = document.getElementsByTagName('li');

for (let li of lis) {
  // получить количество всех <li> ниже этого <li>
  let descendantsCount = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  // добавить непосредственно к текстовому узлу (добавить к тексту)
  li.firstChild.data += ' [' + descendantsCount + ']';
}




alert("End");