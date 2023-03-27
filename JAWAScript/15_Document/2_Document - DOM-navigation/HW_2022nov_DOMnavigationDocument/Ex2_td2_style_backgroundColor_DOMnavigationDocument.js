/* JawaScript - Ex2_td2_style_backgroundColor_DOMnavigationDocument              

Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
*/

'use strict';
alert("Start Ex2_td2_style_backgroundColor_DOMnavigationDocument");


// let mytable = document.body.firstElementChild;                                 // через колекцію .rows  таблиці

// let index = 0;
// for (let eltr of mytable.rows) {

//     eltr.cells[index].style.backgroundColor = 'red';

//     index++;
// }


// let tbody = document.body.firstElementChild.firstElementChild;              // через колекцію .children  parentElement

// for(let i = 0; i < tbody.children.length; i++) {
// tbody.children[i].children[i].style.backgroundColor = 'red';
// }


// let table = Array.from(document.body.firstElementChild.rows);                // через метод .filter массиву
// table.filter((item, index) =>{
//     item.cells[index].style.backgroundColor = 'red';
// });


document.body.firstElementChild.querySelectorAll('tr').forEach((row, i) => row.cells[i].style.background = 'red');


alert("End");