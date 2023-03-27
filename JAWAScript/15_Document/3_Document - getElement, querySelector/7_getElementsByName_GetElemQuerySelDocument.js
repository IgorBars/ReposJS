/* JawaScript - 7_getElementsByName_GetElemQuerySelDocument       elem.getElementsByName(tag) - МЕТОДЬІ ПОИСКА

Существуют также другие методы поиска элементов по тегу, классу и так далее.

На данный момент, они скорее исторические, так как querySelector более чем эффективен.

Здесь мы рассмотрим их для полноты картины, также вы можете встретить их в старом коде.

    - elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. 
        Передав "*" вместо тега, можно получить всех потомков.

    - elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс (ИМЯ КЛАССА).

    - document.getElementsByName(name) возвращает элементы с заданным АТРИБУТОМ name. Очень редко используется.
     |DOCUMENT|

Все методы "getElementsBy*" возвращают живую коллекцию. Такие коллекции всегда отражают текущее состояние документа 
и автоматически обновляются при его изменении.
*/

'use strict';
alert("Start 7_getElementsByName_GetElemQuerySelDocument");



// сначала ищем по имени атрибута: name (<form name="my-form">)
let form = document.getElementsByName('my-form')[0];

// дальше ищем по классу внутри form
let articles = form.getElementsByClassName('article');
alert(articles.length); // 2, находим два элемента с классом article



alert("End");