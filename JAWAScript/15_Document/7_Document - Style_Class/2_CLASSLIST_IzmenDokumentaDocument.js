/* JawaScript - 2_CLASSLIST_IzmenDokumentaDocument         elem.classList
                                                    ДОБАВЛЕНИЕ/УДАЛЕНИЕ МЕТОДАМИ JS КЛАССА ЄЛЕМЕНТА

Свойство elem.classList – это специальный объект с методами для добавления/удаления одного класса.

Методы classList:
 - elem.classList.add("class")      – добавить класс.
 - elem.classList.remove("class")   – удалить класс.
 - elem.classList.toggle("class")   – добавить класс, если его нет, иначе удалить.
 - elem.classList.contains("class") – проверка наличия класса, возвращает true/false.


<body class="main page">
    
    <script src="2_classList_IzmenDokumentaDocument.js"></script>
</body>
*/

'use strict';
alert("Start 2_CLASSLIST_IzmenDokumentaDocument");


// добавление класса
document.body.classList.add('article');

alert(document.body.className); // main page article

//объект classList является перебираемым, поэтому можно перечислить все классы при помощи for..of:
for (let name of document.body.classList) {
    alert(name); // main, затем page, затем article
}


alert("End");