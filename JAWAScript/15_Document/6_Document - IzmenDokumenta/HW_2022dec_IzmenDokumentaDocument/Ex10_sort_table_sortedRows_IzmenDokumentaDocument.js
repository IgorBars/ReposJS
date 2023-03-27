/* JawaScript - Ex10_sort_table_sortedRows_IzmenDokumentaDocument         

Напишите код для сортировки по столбцу "name".

Получим все <tr>, как table.querySelectorAll('tr'), затем сделаем массив из них, потому что нам понадобятся методы массива.

Первый TR (table.rows[0]) – это заголовок таблицы, поэтому мы берём .slice(1).

Затем отсортируем их по содержимому в первом <td> (по имени).

Теперь вставим узлы в правильном порядке .append(...sortedRows).

Таблицы всегда имеют неявный элемент <tbody>, поэтому нам нужно получить его и вставить в него: простой table.append(...) потерпит неудачу.

Обратите внимание: нам не нужно их удалять, просто «вставляем их заново», они автоматически покинут старое место.
*/

'use strict';
alert("Start Ex10_sort_table_sortedRows_IzmenDokumentaDocument");


let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);
  


alert("End");