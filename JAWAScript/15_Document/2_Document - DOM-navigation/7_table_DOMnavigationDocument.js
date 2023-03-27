/* JawaScript - 7_table_DOMnavigationDocument              Элемент <table> - СРЕДСТВА НАВИГАЦИИ
    - в дополнение к свойствам, о которых речь шла выше, поддерживает следующие:

table.rows – коллекция строк <tr> таблицы.
table.caption/tHead/tFoot – ссылки на элементы таблицы <caption>, <thead>, <tfoot>.
table.tBodies – коллекция элементов таблицы <tbody> (по спецификации их может быть больше одного).
<thead>, <tfoot>, <tbody> предоставляют свойство rows:

tbody.rows – коллекция строк <tr> секции.
<tr>:

tr.cells – коллекция <td> и <th> ячеек, находящихся внутри строки <tr>.
tr.sectionRowIndex – номер строки <tr> в текущей секции <thead>/<tbody>/<tfoot>.
tr.rowIndex – номер строки <tr> в таблице (включая все строки таблицы).
<td> and <th>:

td.cellIndex – номер ячейки в строке <tr>.
*/

'use strict';
alert("Start 7_table_DOMnavigationDocument");


// выводит содержимое первой строки, второй ячейки
alert( table.rows[0].cells[1].innerHTML ) // "два"



// Спецификация: https://html.spec.whatwg.org/multipage/tables.html
alert("End");