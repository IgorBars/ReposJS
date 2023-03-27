/* JawaScript - 4_table_cells_mouseoverEnterINTERFACEevents               

В нашем случае мы хотим обрабатывать переходы именно между ячейками <td>: вход на ячейку и выход с неё. 
Прочие переходы, в частности, внутри ячейки <td> или вообще вне любых ячеек, нас не интересуют, хорошо бы их отфильтровать.

Можно достичь этого так:
    - Запоминать текущую ячейку <td> в переменную, которую назовём currentElem.
    - На mouseover – игнорировать событие, если мы всё ещё внутри той же самой ячейки <td>.
    - На mouseout – игнорировать событие, если это не уход с текущей ячейки <td>.
*/

'use strict';
alert("Start 4_table_cells_mouseoverEnterINTERFACEevents");

let table = document.getElementById('table');
let currentElem = null;

table.onmouseover = function(event) {
    // перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
    // если currentElem есть (не удален onmouseout), то мы ещё не ушли с предыдущего <td>,
    // это переход внутри - игнорируем такое событие

    // еще не ушли с <td> - игнорировать
    if (currentElem) return;                            // при наличии currentElem   - єто заход не на TD (пока не вьішли с TD)

    let target = event.target.closest('td');            // ближайший родитель (включая сам елемент) при заходе на TD

    // заход не на <td> - игнорировать
    if (!target) return;                                 // если не на ячейку td

    // переход на <td>, но вне нашей таблицы (возможно при вложенных таблицах)
    // игнорировать
    if (!table.contains(target)) return;                // если таблица не содержит <td>, найденньій как ближайший родитель

    // ура, мы зашли на новый <td>
    currentElem = target;

    target.style.background = 'pink';

    text.value += "mouseover target" + target.tagName + "\n";
    text.scrollTop = text.scrollHeight;
};
  
table.onmouseout = function(event) {
    let target = event.target.closest('td');             // для вьівода сообщений

    // если мы вне <td>, то игнорируем уход мыши
    // это какой-то переход внутри таблицы, но вне <td>,
    // например с <tr> на другой <tr>
    if (!currentElem) return;                           // если нету currentElem (при уходе удаляется в конце єтого блока), єто уход не с <td>

    // мы покидаем элемент – но куда? Возможно, на потомка?
    let relatedTarget = event.relatedTarget;            // при уходе с td равняется новому елементу td 
    while (relatedTarget) {                             // обработаем новьій елемент, на которьій заходим
        // поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
        // если да, то это не уход с єлемента, а переход внутри элемента – игнорируем
        if (relatedTarget == currentElem) return;       // [для послед итер] если при уходе с td:  relatedTarget равняется старому елементу td, заход на потомка
    
        relatedTarget = relatedTarget.parentNode;       // присваиваем переменной relatedTarget значение родителя
    }

    // мы действительно покинули элемент
    target.style.background = '';

    currentElem = null;

    text.value += "mouseout target" + target.tagName + "\n";
    text.scrollTop = text.scrollHeight;
};


alert("End");