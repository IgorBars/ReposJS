/* JawaScript - 2_parentNode_DOMnavigationDocument              parentNode - СРЕДСТВА НАВИГАЦИИ

childNodes похож на массив. На самом деле это не массив, а коллекция – особый перебираемый объект-псевдомассив.

В childNodes находятся и ТЕКСТОВЬІЕ узлы и узлы-ЄЛЕМЕНТЬІ и узлы-КОММЕНТАРИИ, если они есть.

Основные навигационные ссылки parentNode:
    document
    document.documentElement (<HTML>)
    document.body           (<body>)
    parentNode      (Родитель доступен через parentNode)
    childNodes      (коллекция дочерних елементов),
    previousSibling,
    nextSibling,
    firstChild, 
    lastChild
*/

'use strict';
alert("Start 2_parentNode_DOMnavigationDocument");


// for (let node of document.body.childNodes) {
//     alert("for of: " + node);           // покажет все узлы из коллекции
// }


for (let i = 0; i < document.body.childNodes.length; i++) {                     // дочерние елем в document.body
    alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
}



alert("End");