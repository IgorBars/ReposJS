/* JawaScript - 5_data_svojstvaUzlovDocument                nodeValue   /  data

Свойство DOM-узла: nodeValue   /  data

nodeValue/data: содержимое текстового узла
*/

'use strict';
alert("Start 5_data_svojstvaUzlovDocument");

/*
<body>
  Привет
  <!-- Комментарий -->
</body>
*/

// Исп св .data для простого получ содержимого:
let text = document.body.firstChild;
alert(text.data);       // Привет

let comment = text.nextSibling;
alert(comment.data);    // Комментарий


alert("End");