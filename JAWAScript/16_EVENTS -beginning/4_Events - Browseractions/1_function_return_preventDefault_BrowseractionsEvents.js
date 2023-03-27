/* JawaScript - 1_function_return_preventDefault_BrowseractionsEvents          event.preventDefault()

Есть два способа отменить действие браузера:

    -Основной способ – это воспользоваться объектом event. 
     Для отмены действия браузера существует стандартный метод event.preventDefault().

    -Если же обработчик назначен через on<событие> (не через addEventListener), 
     то также можно вернуть false из обработчика.
*/

'use strict';
alert("Start 1_function_return_preventDefault_BrowseractionsEvents");


document.onclick = function(event) {
    if (event.target.nodeName != 'A') return;       // если целевой єлемент не ссьілка
  
    let href = event.target.getAttribute('href');   // назначим новое действие при клике на ссьілке
    alert( href );
  
    // return false;            // отменить действие браузера (переход по ссылке)
    event.preventDefault();     // (отменит действие браузера (переход по ссылке), если js-код без ошибок
};


alert("End");