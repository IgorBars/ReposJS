/* JawaScript - 2_HTMLatributs2_Atributy&SvojstvaDocument       
Когда браузер парсит HTML, чтобы создать DOM-объекты для тегов, он распознаёт стандартные атрибуты и 
создаёт DOM-свойства для них.

Таким образом, когда у элемента есть id или другой стандартный атрибут, создаётся соответствующее свойство. 
Но этого не происходит, если атрибут нестандартный.

Например, атрибут "type" является стандартным для элемента <input> (HTMLInputElement), 
но не является стандартным для <body> (HTMLBodyElement). 
Стандартные атрибуты описаны в спецификации для соответствующего класса элемента.
*/

'use strict';
alert("Start 2_HTMLatributs2_Atributy&SvojstvaDocument");
/*
<body id="body" type="...">
    <input id="input" type="text">
    <script src="2_HTMLatributs_Atributy&SvojstvaDocument.js"></script>
</body>
*/

alert(input.type); // text
alert(body.type); // undefined: DOM-свойство не создалось, потому что оно нестандартное




/*
        Cтандартный атрибут для одного тега может быть нестандартным для другого.       !!! 
        Таким образом, для нестандартных атрибутов не будет соответствующих DOM-свойств. 
*/

alert("End");