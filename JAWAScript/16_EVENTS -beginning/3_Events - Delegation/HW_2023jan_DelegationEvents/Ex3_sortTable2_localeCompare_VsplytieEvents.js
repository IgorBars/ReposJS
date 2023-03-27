/* JawaScript - Ex3_sortTable2_localeCompare_VsplytieEvents               
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

Каждый элемент <th> имеет атрибут data-type.

В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, 
ведь числа сортируются иначе, чем строки.
*/
'use strict';
alert("Start Ex3_sortTable2_localeCompare_VsplytieEvents");


let table = document.getElementById('grid');

grid.addEventListener('click', e => {

    if (e.target.tagName !== 'TH') return;
    
    const tbody = grid.querySelector('tbody');
    const rows = Array.from(tbody.rows);     // массив строк таблицьі (без "шапочной строки")

    const col = e.target.cellIndex;         // cellIndex - это номер ячейки th: 0 для первого столбца,  1 для второго и т.д.
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[col].textContent;
        const cellB = rowB.cells[col].textContent;
        
        if (+cellA) return cellA - cellB;   // если cellA -число
        else return cellA.localeCompare(cellB, ['ru', 'en']);
    });
    
    tbody.append(...rows);
    });


alert("End");