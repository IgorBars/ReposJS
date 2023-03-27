/* JawaScript - 6_textContent2_svojstvaUzlovDocument                textContent

Свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
Намного полезнее возможность записывать текст в textContent, т.к. позволяет писать текст «безопасным способом» (теги как текст).
*/

'use strict';
alert("Start 6_textContent2_svojstvaUzlovDocument");

/*
<body>

    <div id="elem1"></div>
    <div id="elem2"></div>

    <script src="6_textContent2_svojstvaUzlovDocument.js"></script>
</body>
*/

let usname = prompt("Введите ваше имя?", "<b>Винни-пух!</b>");

// здесь произв поиск елемента по id="elem1" и найденньій елемент div записьівается в переменную elem1 (так делать не нужно!)
elem1.innerHTML = usname;     // Винни-пух!       (помещается текст с жирньім начертанием)
elem2.textContent = usname;   // <b>Винни-пух!</b> (помещается как есть)

/*
В большинстве случаев мы рассчитываем получить от пользователя текст и хотим, чтобы он интерпретировался как текст. 
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код. 
Присваивание через textContent – один из способов от этого защититься.
*/



alert("End");