/* JawaScript - _DOMnavigationDocument              document - СРЕДСТВА НАВИГАЦИИ

Все операции с DOM начинаются с объекта document. Это главная «точка входа» в DOM. 
Из него мы можем получить доступ к любому узлу.

Самые верхние элементы дерева доступны как свойства объекта document:

<html> = document.documentElement
Самый верхний узел документа: document.documentElement. В DOM он соответствует тегу <html>.

<body> = document.body

<head> = document.head




<html>

<head>
  <script>
    alert( "Из HEAD: " + document.body );           // null, <body> ещё нет
  </script>
</head>

<body>

  <script>
    alert( "Из BODY: " + document.body );           // HTMLBodyElement, теперь он есть
  </script>

</body>
</html>

В мире DOM null означает «не существует»
В DOM значение null значит «не существует» или «нет такого узла».
*/

'use strict';
alert("Start _DOMnavigationDocument");              //  ЗАПУСТИ HTML !!!





alert("End");