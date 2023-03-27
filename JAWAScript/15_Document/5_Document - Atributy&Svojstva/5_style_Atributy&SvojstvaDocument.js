/* JawaScript - 5_style_Atributy&SvojstvaDocument       

DOM-свойства не всегда являются строками. Атрибут style – строка, но свойство style является объектом:
*/

'use strict';
alert("Start 5_style_Atributy&SvojstvaDocument");
/*
<body>
    <div id="div" style="color:red;font-size:120%">Hello</div>
    <script src="5_style_Atributy&SvojstvaDocument.js"></script>
</body>
*/

let div = document.getElementById('div');
// строка
alert(div.getAttribute('style')); // color:red;font-size:120%

// объект
alert(div.style); // [object CSSStyleDeclaration]
alert(div.style.color); // red


/*

*/

alert("End");