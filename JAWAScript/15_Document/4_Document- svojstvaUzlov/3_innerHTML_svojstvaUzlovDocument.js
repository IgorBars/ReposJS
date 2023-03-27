/* JawaScript - 3_innerHTML_svojstvaUzlovDocument                innerHTML  outerHTML

Свойства DOM-узла: innerHTML  outerHTML

Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
*/

'use strict';
alert("Start 3_innerHTML_svojstvaUzlovDocument");


/*<body>
  <p>Параграф</p>
  <div>DIV</div>
  </body>
*/


alert( document.body.innerHTML );           // читаем текущее содержимое
// document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое




// Если innerHTML вставляет в документ тег <script> – он становится частью HTML, но не запускается.

document.body.innerHTML += "<div>Привет<img src='smile.gif'/> !</div>";
document.body.innerHTML += "Как дела?";
// это более короткая запись для:   elem.innerHTML = elem.innerHTML + "..."



// outerHTML
// Полный HTML узла-элемента. Запись в elem.outerHTML не меняет elem. Вместо этого она заменяет его во внешнем контексте.

alert("End");