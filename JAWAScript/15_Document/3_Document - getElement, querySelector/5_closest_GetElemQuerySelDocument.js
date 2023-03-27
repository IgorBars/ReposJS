/* JawaScript - 5_closest_GetElemQuerySelDocument       elem.closest(css) - МЕТОДЬІ ПОИСКА

Предки элемента – родитель, родитель родителя, его родитель и так далее. Вместе они образуют цепочку иерархии 
от элемента до вершины.

Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.

Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из родителей. 
Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден.

*/

'use strict';
alert("Start 5_closest_GetElemQuerySelDocument");


let chapter = document.querySelector('.chapter');    // LI (.chapter - с точкой - селектор класса)

alert(chapter.closest('.book'));        // UL   (первьій по пути к вершине иерархии в DOM)
alert(chapter.closest('.contents'));    // DIV  (2-й по пути к вершине иерархии в DOM)

alert(chapter.closest('h1'));   // null (потому что h1 - не предок)





alert("End");