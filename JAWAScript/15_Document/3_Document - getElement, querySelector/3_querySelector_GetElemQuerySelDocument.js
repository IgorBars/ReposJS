/* JawaScript - 3_querySelector_GetElemQuerySelDocument       elem.querySelector(css) - МЕТОДЬІ ПОИСКА

Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.

Иначе говоря, результат такой же, как при вызове elem.querySelectorAll(css)[0], но он сначала найдёт все элементы, 
а потом возьмёт первый, в то время как elem.querySelector найдёт только первый и остановится. 
Это быстрее, кроме того, его короче писать.

Псевдоклассы в CSS-селекторе, в частности :hover и :active, также поддерживаются. 
Например, document.querySelectorAll(':hover') вернёт коллекцию (в порядке вложенности: от внешнего к внутреннему) 
                          из текущих элементов под курсором мыши.
*/

'use strict';
alert("Start 3_querySelector_GetElemQuerySelDocument");

let element = document.querySelector('ul > li:last-child'); //   (только последний li первого ul) (первьій найденньій такой li)

alert(element.innerHTML); // "тест"  (только последний li первого ul)




alert("End");