/* JawaScript - 1_table_highlight_DelegationEvents               Делегирование

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
alert("Start 1_table_highlight_DelegationEvents");


let table = document.getElementById('bagua-table');

let selectedTd;

table.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'TD') return; // не на TD? тогда не интересует

  highlight(target); // подсветить TD
};

function highlight(td) {
  if (selectedTd) { // убрать существующую подсветку, если есть
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // подсветить новый td
}

// Можно заметить, что клик на вьіделенном тексте не обрабатьівается

// У текущей версии кода есть принципиальньій недостаток.

// Клик может быть не на теге <td>, а внутри него, на вложенном потомке (<strong>Север</strong>).


alert("End");