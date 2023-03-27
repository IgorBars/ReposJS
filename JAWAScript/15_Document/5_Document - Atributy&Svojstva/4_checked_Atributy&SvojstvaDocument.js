/* JawaScript - 4_checked_Atributy&SvojstvaDocument       

DOM-свойства не всегда являются строками. Например, свойство input.checked (для чекбоксов) имеет логический тип:
*/

'use strict';
alert("Start 4_checked_Atributy&SvojstvaDocument");
/*
<body>
    <input id="input" type="checkbox" checked> checkbox
    <script src="4_checked_Atributy&SvojstvaDocument.js"></script>
</body>
*/

let input = document.getElementById('input');
// input.checked = false;

alert(input.getAttribute('checked')); // значение атрибута: пустая строка (при знач свойства true/false)

alert(input.checked);                  // значение свойства: true


/*

*/

alert("End");