/* JawaScript - 2_HTMLatributs_Atributy&SvojstvaDocument       
Когда браузер парсит HTML, чтобы создать DOM-объекты для тегов, он распознаёт стандартные атрибуты и 
создаёт DOM-свойства для них.

Таким образом, когда у элемента есть id или другой стандартный атрибут, создаётся соответствующее свойство. 
Но этого не происходит, если атрибут нестандартный.
*/

'use strict';
alert("Start 2_HTMLatributs_Atributy&SvojstvaDocument");
/*
<body id="test" something="non-standard">
    <script src="2_HTMLatributs_Atributy&SvojstvaDocument.js"></script>
</body>
*/

alert(document.body.id); // test
// нестандартный атрибут не преобразуется в свойство
alert(document.body.something); // undefined




/*
        Cтандартный атрибут для одного тега может быть нестандартным для другого.       !!! 
*/

alert("End");