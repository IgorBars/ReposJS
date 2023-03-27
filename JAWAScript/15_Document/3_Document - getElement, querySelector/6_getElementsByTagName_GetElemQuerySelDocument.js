/* JawaScript - 6_getElementsByTagName_GetElemQuerySelDocument       elem.getElementsByTagName(tag) - МЕТОДЬІ ПОИСКА

Существуют также другие методы поиска элементов по тегу, классу и так далее.

На данный момент, они скорее исторические, так как querySelector более чем эффективен.

Здесь мы рассмотрим их для полноты картины, также вы можете встретить их в старом коде.

    - elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. 
        Передав "*" вместо тега, можно получить всех потомков.

    - elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс (ИМЯ КЛАССА).

    - document.getElementsByName(name) возвращает элементы с заданным АТРИБУТОМ name. Очень редко используется.

    

Все методы "getElementsBy*" возвращают живую коллекцию. Такие коллекции всегда отражают текущее состояние документа 
и автоматически обновляются при его изменении.
*/

'use strict';
alert("Start 6_getElementsByTagName_GetElemQuerySelDocument");


// получить все элементы div в документе
let divs = document.getElementsByTagName('div');    //  коллекция найденньіх  div-елементов
alert(divs);        // [object HTMLCollection]

// сделать фон красным
divs[0].style.background = 'red';



alert("End");