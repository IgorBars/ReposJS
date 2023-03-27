/* JawaScript - 1_prototype_Atributy&SvojstvaDocument       Атрибуты & Свойства
Атрибутам html-елементов соответствуют свойства DOM-узлов.


Атрибуты – это то, что написано в HTML.
Свойства – это то, что находится в DOM-объектах.


Например, для такого тега <body id="page"> (с атрибутом id) у DOM-объекта будет соответствуюшее свойство body.id="page".

Для DOM-объектов, как объектов JS можно добавлять свойства, методьі и даже изменять встроенные прототипы, 
(такие как Element.prototype) и добавлять в прототипах новые методы ко ВСЕМ элементам.

*/

'use strict';
alert("Start 1_prototype_Atributy&SvojstvaDocument");


Element.prototype.sayHi = function() {
    alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY


/*
Итак, DOM-свойства и методы ведут себя так же, как и обычные объекты JavaScript:

    - Им можно присвоить любое значение.
    - Они регистрозависимы (нужно писать elem.nodeType, не elem.NoDeTyPe).
*/

alert("End");