/* JawaScript - Ex3_sortTable_VsplytieEvents               
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

Каждый элемент <th> имеет атрибут data-type.

В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, 
ведь числа сортируются иначе, чем строки.
*/
'use strict';
alert("Start Ex3_sortTable_VsplytieEvents");


let table = document.getElementById('grid');

table.addEventListener("click", (event) => {

    if (event.target.tagName != "TH") { 
        return;

    } else {

        let tbody = grid.querySelector('tbody');
        let arr = Array.from(tbody.rows);
        // let arr = Array.from(tbody.querySelectorAll('tr')); // массив строк таблицьі (без "шапочной строки")

        let index = event.target.cellIndex;  // cellIndex - это номер ячейки th: 0 для первого столбца,  1 для второго и т.д.

        if (event.target.dataset.type == "number") {
            arr.sort((a, b) => a.cells[index].innerHTML - b.cells[index].innerHTML);

        } else {
            arr.sort((a, b) => a.cells[index].innerHTML > b.cells[index].innerHTML ? 1 : -1);
            
        }

        tbody.append(...arr);
    }
})


alert("End");