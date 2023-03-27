/* JawaScript - 2_table_highlight_DelegationEvents               Делегирование

Принцип делегирования:
(подходит для однотипной обработки множества собьітий) собьітия от "прослушиваемьіх" єлементов вспльівают и перехватьіваются обработчиком на общем предке.
Благодаря инфе о целевом єлементе event.target в обработчике идентифицируется єлемент, на котором произошло собьітие.
(позволяет не городить сотни обработчиков для КАЖДЛОГО єлемента)

применение делегирования.

Например, нам нужно сделать меню с разными кнопками: «Сохранить (save)», «Загрузить (load)», «Поиск (search)» и т.д. 
И есть объект с соответствующими методами save, load, search… Как их состыковать?

Мы можем добавить один обработчик для всего меню и атрибуты data-action для каждой кнопки в соответствии с методами, 
которые они вызывают.


*/

'use strict';
alert("Start 2_table_highlight_DelegationEvents");


let table = document.getElementById('bagua-table');

let selectedTd;

// table.onclick = function(event) {
//   let target = event.target;

//   while (target != this) {           // пока не поднялись до родительского єлемента, на котором повешен обработчик
//     if (target.tagName == 'TD') {
//       highlight(target);
//       return;
//     }
//     target = target.parentNode;
//   }
// }

table.onclick = function(event) {
    let td = event.target.closest('td');
  
    if (!td) return;                        // если нет родителя-td, значит собьітие произошло не в ячейке, игнорируем

    if (!table.contains(td)) return;        // если родитель-td не принадлежит table, значит собьітие произошло во вложенной таблице, игнорируем

    highlight(target);
}


function highlight(td) {
  if (selectedTd) {
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight');
}



alert("End");