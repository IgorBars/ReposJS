/* JawaScript - Ex10_sort_table_IzmenDokumentaDocument         

Напишите код для сортировки по столбцу "name".
*/

'use strict';
alert("Start Ex10_sort_table_IzmenDokumentaDocument");


let tbody = document.querySelector('tbody');

let trMap = new Map();

let textArr = [];

for (let tr of tbody.children) {

    let tdText = tr.firstElementChild.innerHTML;

    textArr.push(tdText);

    trMap.set(tdText, tr);
}

textArr.sort();

textArr.forEach((item) => { tbody.append(trMap.get(item)); });
  


alert("End");