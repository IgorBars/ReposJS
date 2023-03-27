/* JawaScript - 6_textContent_svojstvaUzlovDocument                textContent

Свойство DOM-узла: textContent

Свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
*/

'use strict';
alert("Start 6_textContent_svojstvaUzlovDocument");

/*
<body>
  <div id="news">
    <h1>Срочно в номер!</h1>
    <p>Марсиане атаковали человечество!</p>
  </div>
</body>
*/

// поиск елемента по id="news" и найденньій елемент div записьівается в переменную news (так делать не нужно!)
alert(news.textContent);    // Срочно в номер! Марсиане атаковали человечество!



// Намного полезнее возможность записывать текст в textContent, т.к. позволяет писать текст «безопасным способом» (теги как текст).



alert("End");