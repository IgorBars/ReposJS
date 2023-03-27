/* JawaScript - 3_oncontextmenu_BrowseractionsEvents               

Чтобьі при вспльітии собьітия, обработанного на elem, оно не отрабатьівало повторно в обработчике на document,
можно проверить в обработчике document, было ли отменено действие по умолчанию на целевом єлементе? 
Если да, тогда событие уже было обработано на elem, и нам не нужно на него реагировать в обработчиках вьіше (условие по значению defaultPrevented).

Если при вспльітии собьітие бьіло первично обработано на целевом єлементе и отменено для действий браузера по умолчанию preventDefault(),
то при дальнейшем вспльітии на обработчиках вьіше можно при помощи состояния defaultPrevented (true/false) отсортировать его и не обрабатьівать
повторно

ТАКИМ ОБРАЗОМ defaultPrevented - ЄТО ФЛАГ "применения preventDefault()"

defaultPrevented - Флаг для обработки собьітия на более вьісоком уровне - с состоянием о применении preventDefault() на более низком уровне
*/

'use strict';
alert("Start 3_oncontextmenu_BrowseractionsEvents");


elem.oncontextmenu = function(event) {  // contextmenu - собьітие для открьівания контекстного меню по пр кнопке
    event.preventDefault();             // отмена реакции на собьітие по умолчанию (отмена вьіброса контекстного меню)
    alert("Контекстное меню кнопки");
};

document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;     // если на целевом єлементе event.preventDefault() вьізьівался, не реагировать на єто собьітие

    event.preventDefault();
    alert("Контекстное меню документа");
};


alert("End");