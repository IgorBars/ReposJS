/* JawaScript - 3_HTMLATRIBUTS_non_standard_Atributy&SvojstvaDocument       методьі для HTML-атрибутов

Все HTML-атрибуты доступны в JS с помощью следующих методов:

    - elem.hasAttribute(name) – проверяет наличие атрибута.
    - elem.getAttribute(name) – получает значение атрибута.
    - elem.setAttribute(name, value) – устанавливает значение атрибута.
    - elem.removeAttribute(name) – удаляет атрибут.

    - elem.attributes: коллекция объектов, 
        которая принадлежит ко встроенному классу Attr со свойствами name и value.
*/

'use strict';
alert("Start 3_HTMLATRIBUTS_non_standard_Atributy&SvojstvaDocument");
/*
<body something="non-standard">
    <script src="2_HTMLatributs_Atributy&SvojstvaDocument.js"></script>
</body>
*/


// демонстрация чтения нестандартного свойства:
alert(document.body.getAttribute('something')); // non-standard


/*
У HTML-атрибутов есть следующие особенности:

    - Их имена регистронезависимы (id то же самое, что и ID).
    - Их значения всегда являются строками.
*/

alert("End");