/* JawaScript - 7_show-info_Atributy&SvojstvaDocument
Иногда нестандартные атрибуты используются для передачи пользовательских данных из HTML в JavaScript, 
или чтобы «помечать» HTML-элементы для JavaScript.


Например, JS помещает в пустьіе подготовленньіе(помеченньіе) div свои данньіе:
*/

'use strict';
alert("Start 7_show-info_Atributy&SvojstvaDocument");
/*
<body>
    <!-- пометить div, чтобы показать здесь поле "name" -->
    <div show-info="name"></div>

    <!-- а здесь возраст "age" -->
    <div show-info="age"></div>

    <script src="7_show-info_Atributy&SvojstvaDocument.js"></script>
</body>
*/

// код находит элемент с пометкой и показывает запрошенную информацию
let user = {
    name: "Pete",
    age: 25
};

for(let div of document.querySelectorAll('[show-info]')) {
    // вставить соответствующую информацию в поле
    let field = div.getAttribute('show-info');

    alert(`В DIV ${field} помещаем значение ${user[field]}`);
    
    div.innerHTML = user[field]; // сначала Pete в name, потом 25 в age
}



/*

*/

alert("End");