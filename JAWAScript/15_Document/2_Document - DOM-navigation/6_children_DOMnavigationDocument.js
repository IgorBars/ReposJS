/* JawaScript - 6_children_DOMnavigationDocument              children - СРЕДСТВА НАВИГАЦИИ
*/

'use strict';
alert("Start 6_children_DOMnavigationDocument");

for (let elem of document.body.children) {
    alert(elem);                            // DIV, UL, DIV, SCRIPT     (только узльі-элементы)
}



alert("End");