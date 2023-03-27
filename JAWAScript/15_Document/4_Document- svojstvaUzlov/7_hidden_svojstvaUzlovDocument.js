/* JawaScript - 6_textContent2_svojstvaUzlovDocument                hidden

Атрибут и DOM-свойство «hidden» указывает на то, видим ли мы элемент или нет.

Мы можем использовать его в HTML или назначать при помощи JavaScript,
*/

'use strict';
alert("Start 6_textContent2_svojstvaUzlovDocument");

/*
<body>
    <div>Оба тега DIV внизу невидимы</div>
    <div hidden>С атрибутом "hidden"</div>
    <div id="elem">С назначенным JavaScript свойством "hidden"</div>

    <script src="7_hidden_svojstvaUzlovDocument.js"></script>
</body>
*/

// здесь произв поиск елемента по id="elem" и найденньій елемент div записьівается в переменную elem (так делать не нужно!)
elem.hidden = true;

/*
Технически, hidden работает так же, как style="display:none". Но его применение проще.
*/



alert("End");