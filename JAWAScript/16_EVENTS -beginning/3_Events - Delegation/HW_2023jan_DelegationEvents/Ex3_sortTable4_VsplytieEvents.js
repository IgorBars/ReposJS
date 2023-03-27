/* JawaScript - Ex3_sortTable4_VsplytieEvents               
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

Каждый элемент <th> имеет атрибут data-type.

В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, 
ведь числа сортируются иначе, чем строки.
*/
'use strict';
alert("Start Ex3_sortTable4_VsplytieEvents");


let table = document.getElementById('grid');


table.addEventListener('click', function(event) {  // click (not ONclick !!!) table.style.backgroundColor = 'blue';

    if(event.target.tagName != 'TH') {
        return;
    }
    
    let th = event.target;
    let index = th.cellIndex;
    let typeString = th.dataset.type;
    
    sortTable(index, typeString);
})


function getCompare(indexTH, typeTH) {
    switch(typeTH) {
        case 'number': return (a, b) => a.cells[indexTH].innerHTML - b.cells[indexTH].innerHTML;
        // case 'string': return (a, b) => a.cells[indexTH].innerHTML > b.cells[indexTH].innerHTML ? 1 : -1;
        case 'string': return (a, b) => a.cells[indexTH].innerHTML.localeCompare(b.cells[indexTH].innerHTML, ['ru', 'en']);
        //case '...':
    }
}


function sortTable(indexTH, typeTH) {

    let tbody = table.querySelector('tbody');
    let rowsArr = Array.from(tbody.rows);       // alert(rowsArr[0].cells[0].innerHTML);

    rowsArr.sort(getCompare(indexTH, typeTH));   // alert(rowsArr[0].cells[0].innerHTML);

    tbody.append(...rowsArr);

    for(let row of rowsArr) {                   // вьіделим столбец, по которому сравниваем, цветом

        for(let tr of row.cells) {
            if(tr.style.background = "rgb(231, 221, 221)") {
                tr.style.background = "";       // снять предьідущее вьіделение
            }
        }
        row.cells[indexTH].style.background = "rgb(231, 221, 221)";
    }
}




alert("End");