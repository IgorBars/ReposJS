/* JawaScript - 9_contains_GetElemQuerySelDocument       elemA.contains(elemB) - МЕТОДЬІ ПОИСКА

И, напоследок, давайте упомянем ещё один метод, который проверяет наличие отношений между предком и потомком:

elemA.contains(elemB) вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.
*/

'use strict';
alert("Start 9_contains_GetElemQuerySelDocument");


let form = document.querySelector('form');
form.style.background = 'red';                  // вся форма

let div = document.querySelector('form > div');
div.style.background = 'green';                 // только 1-й найденньій div

alert(form.contains(div));  // true


alert("End");
/* Сначала выполнил задание а потом сидел и "тыкался" через f12 во вкладке "Elements". И как оказалось не напрасно! 
Обнаружил возможность скопировать путь к любому элементу для JS: кликаете в дереве страницы по любому элементы правой кнопкой 
--> copy --> copy JS path, вставляете в консоль или куда вам нужно и получаете этот данный элемент. Не благодарите))
*/