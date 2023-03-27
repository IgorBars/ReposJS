/* JawaScript - 4_nextSibling_DOMnavigationDocument              nextSibling - СРЕДСТВА НАВИГАЦИИ

Следующий узел того же родителя (следующий сосед) – в свойстве nextSibling, а предыдущий – в previousSibling.

Родитель доступен через parentNode.
*/

'use strict';
alert("Start 3_Array_from_childNodes_DOMnavigationDocument");


// родителем <body> является <html>
alert( document.body.parentNode === document.documentElement ); // true

// после <head> идёт <body>
alert( document.head.nextSibling );         // HTMLBodyElement

// перед <body> находится <head>
alert( document.body.previousSibling );      // HTMLHeadElement



/*

*/

alert("End");