/* JawaScript - 3_HTMLatributs_non_standard2_Atributy&SvojstvaDocument       
Все HTML-атрибуты доступны в JS с помощью следующих методов:

elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
elem.removeAttribute(name) – удаляет атрибут.

Кроме этого, получить все атрибуты элемента можно с помощью свойства elem.attributes: коллекция объектов, 
которая принадлежит ко встроенному классу Attr со свойствами name и value.
*/

'use strict';
alert("Start 3_HTMLatributs_non_standard2_Atributy&SvojstvaDocument");
/*
<body>
    <div id="elem" about="Elephant"></div>
    <script src="3_HTMLatributs_non_standard2_Atributy&SvojstvaDocument.js"></script>
</body>
*/

// Расширенная демонстрация чтения нестандартного свойства:
let elem = document.getElementById('elem');
alert( elem.getAttribute('About') ); // (1) 'Elephant', чтение
      
elem.setAttribute('Test', 123);     // (2), запись

alert( elem.outerHTML );            // (3), <div id="elem" about="Elephant" test="123"></div>

for (let attr of elem.attributes) { // (4) весь список
  alert( `${attr.name} = ${attr.value}` );  // id = elem    about = Elephant    test = 123
}


/*
1 getAttribute('About') – здесь первая буква заглавная, а в HTML – строчная. Но это не важно: имена атрибутов регистронезависимы.
2 Мы можем присвоить что угодно атрибуту, но это станет строкой. Поэтому в этой строчке мы получаем значение "123".
3 Все атрибуты, в том числе те, которые мы установили, видны в outerHTML.
4 Коллекция attributes является перебираемой. В ней есть все атрибуты элемента (стандартные и нестандартные) в виде объектов со свойствами name и value.


У HTML-атрибутов есть следующие особенности:

    - Их имена регистронезависимы (id то же самое, что и ID).
    - Их значения всегда являются строками.
*/

alert("End");