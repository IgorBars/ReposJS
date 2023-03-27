/* JawaScript - Ex3_sortTable3_switch_VsplytieEvents               
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

Каждый элемент <th> имеет атрибут data-type.

В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, 
ведь числа сортируются иначе, чем строки.
*/
'use strict';
alert("Start Ex3_sortTable3_switch_VsplytieEvents");


let table = document.getElementById('grid');

grid.onclick = function(e) {
    if (e.target.tagName != 'TH') return;   // если ячейка TH, тогда сортировать

    let th = e.target;
 
    sortGrid(th.cellIndex, th.dataset.type);  // cellIndex - это номер ячейки th: 0 для первого столбца, 1 для второго и т.д.
};

  function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // function compare(a, b) {} -сравнивает две строки, нужна для сортировки
    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
      break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
      break;
      /*case 'AAAA':    // для следующих колонок с новьіми th.dataset.type
          compare = function(rowA, rowB) {}
        break;
        ...
      */
    }

    // сортировка
    rowsArray.sort(compare);

    tbody.append(...rowsArray); // берет каждую строку (согласно оч rowsArray) из старого места и помещает ее в конец 
  }


alert("End");