/* JawaScript - Ex2_td3_style_backgroundColor_DOMnavigationDocument              

Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
*/

'use strict';
alert("Start Ex2_td3_style_backgroundColor_DOMnavigationDocument");


let mytable = document.body.firstElementChild;

let index = 0;
for (let eltr of mytable.rows) {

    eltr.cells[index].style.backgroundColor = 'red';

    if (index % 2 == 0) {
        eltr.style.backgroundColor = '#ffde87';         // тон парних строк
    }

    index++;
}



alert("End");