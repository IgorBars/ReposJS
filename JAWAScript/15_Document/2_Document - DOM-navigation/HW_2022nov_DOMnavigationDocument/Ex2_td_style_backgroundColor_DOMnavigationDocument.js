/* JawaScript - Ex2_td_style_backgroundColor_DOMnavigationDocument              

Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
*/

'use strict';
alert("Start Ex2_td_style_backgroundColor_DOMnavigationDocument");

//  в переменной td находится DOM-элемент для тега <td>
let mytable = document.body.firstElementChild;

for (let eltr of mytable.rows) {

    for (let eltd of eltr.cells) {

        if (eltr.rowIndex === eltd.cellIndex) {

            eltd.style.backgroundColor = 'red';
        }
    }
}

mytable.rows.item(0).style.backgroundColor = 'green';               // .item(0) - елемент масиву
mytable.rows[0].style.backgroundColor = 'green'; 

mytable.rows.item(3).cells.item(1).style.backgroundColor = 'blue';

alert("End");