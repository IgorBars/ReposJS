/* JawaScript - 2_nodeType_svojstvaUzlovDocument                nodeType

Свойство DOM-узла: nodeType         (Только для чтения)
Свойства DOM-узла: nodeName/tagName  (Только для чтения).


СВОЙСТВО nodeType предоставляет ещё один, «старомодный» способ узнать «тип» DOM-узла:
    - elem.nodeType == 1 для узлов-элементов,
    - elem.nodeType == 3 для текстовых узлов,
    - elem.nodeType == 9 для объектов документа,

В спецификации можно посмотреть остальные значения.
*/

'use strict';
alert("Start 2_nodeType_svojstvaUzlovDocument");

let elem = document.body;

// давайте разберёмся: какой тип узла находится в elem?
alert(elem.nodeType); // 1 => элемент

// и его первый потомок...
alert(elem.firstChild.nodeType); // 3 => текст

// для объекта document значение типа -- 9
alert( document.nodeType ); // 9

/*
Получив DOM-узел, мы можем узнать имя его тега из СВОЙСТВ nodeName и tagName:

*/
alert( document.body.nodeName ); // BODY (Свойство nodeName определено для любых узлов Node:
                                    // - для элементов оно равно tagName.
                                    // - для остальных типов узлов (текст, комментарий и т.д.) оно содержит строку с типом узла.)
                                    
alert( document.body.tagName ); // BODY (Свойство tagName есть только у элементов Element)


alert("End");