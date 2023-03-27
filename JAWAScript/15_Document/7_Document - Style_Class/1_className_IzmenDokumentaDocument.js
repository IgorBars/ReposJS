/* JawaScript - 1_className_IzmenDokumentaDocument         className
                                                    ПОЛУЧИТЬ В JS КЛАСС ЄЛЕМЕНТА

Атрибуту "class" соответствует свойство className
(т.е. чтобьі в JS прочитать содержимое атрибута class html-елемента, читаем свойство elem.className)


<body class="main page">                    2 класи: main і page
        
    <script src="1_className_IzmenDokumentaDocument.js"></script>
</body>
*/

'use strict';
alert("Start 1_className_IzmenDokumentaDocument");


alert(document.body.className); // main page  (свойство className содержит два имени классов)
  
// Если мы присваиваем что-то elem.className (!), то это заменяет всю строку с классами (стирает предьідущие имена-ссьілки классов)

alert("End");