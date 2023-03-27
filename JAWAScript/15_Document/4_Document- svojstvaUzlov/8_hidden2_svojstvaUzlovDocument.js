/* JawaScript - 8_hidden2_svojstvaUzlovDocument                hidden

Мигающий элемент с исп атрибута и DOM-свойства «hidden»:
*/

'use strict';
alert("Start 8_hidden2_svojstvaUzlovDocument");

/*
<body>
    <div id="elem">Мигающий элемент</div>

    <script src="8_hidden2_svojstvaUzlovDocument.js"></script>
</body>
*/

// здесь произв поиск елемента по id="elem" и найденньій елемент div записьівается в переменную elem (так делать не нужно!)
setInterval(() => elem.hidden = !elem.hidden, 1000);

/*
Технически, hidden работает так же, как style="display:none". Но его применение проще.
*/



alert("End");