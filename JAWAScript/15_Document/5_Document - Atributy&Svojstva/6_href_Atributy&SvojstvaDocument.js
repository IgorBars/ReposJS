/* JawaScript - 6_href_Atributy&SvojstvaDocument       

DOM-свойства не всегда являются строками. DOM-свойство href всегда содержит полный URL, 
даже если атрибут содержит относительный URL или просто #hash.
*/

'use strict';
alert("Start 6_href_Atributy&SvojstvaDocument");
/*
<body>
    <a id="a" href="#hello">link</a>
    <script src="6_href_Atributy&SvojstvaDocument.js"></script>
</body>
*/


let a = document.getElementById('a');
// атрибут
alert(a.getAttribute('href')); // #hello

// свойство
alert(a.href ); //полный URL file:///E:/JAWASCRIPT/JS%20-%20Visual%20Studio/JAWAScript/15_Document/5_Document%20-%20Atributy&Svojstva/6_href_Atributy&SvojstvaDocument.html#hello



/*

*/

alert("End");