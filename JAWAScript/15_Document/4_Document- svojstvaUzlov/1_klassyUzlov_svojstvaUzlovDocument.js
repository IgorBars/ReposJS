/* JawaScript - 1_klassyUzlov_svojstvaUzlovDocument
Object
-EventTarget                        (Корень иерархии - это корневой «абстрактный» класс для всего)

    - Node                         (наследует от EventTarget, также «абстрактный» класс, служит основой для DOM-узлов)(обеспечивает базовую функциональность: parentNode, nextSibling, childNodes)

        - Document

        - Element                  (<div> Text </div>)(навигация на уровне элементов: nextElementSibling, children)
                                                      (методы поиска элементов: getElementsByTagName, querySelector)
            - HTMLElement
            - SVGElement

        - Text                     (<div> Text </div>)

        - Comment                  (<!--comment-->)
*/

'use strict';
alert("Start 1_klassyUzlov_svojstvaUzlovDocument");

// Имя класса DOM-узла.
// Свойство constructor ссылается на конструктор класса. В свойстве constructor.name содержится имя класса.
alert( document.body.constructor.name ); // HTMLBodyElement


//…Или мы можем просто привести его к строке:
alert( document.body ); // [object HTMLBodyElement]


//Проверить наследование можно также при помощи instanceof:

alert( document.body instanceof HTMLBodyElement ); // true  (body наследует от HTMLBodyElement) /содержится в
alert( document.body instanceof HTMLElement ); // true      (         ... и от HTMLElement)
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true

/*
Можно вывести в консоли браузера любой элемент через console.dir(elem) - посмотреть цепочку наследования
Для DOM-элементов:

    - console.log(elem) выводит элемент в виде DOM-дерева.
        console.log(document.body)
    - console.dir(elem) выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.
        console.dir(document.body)

*/

alert("End");