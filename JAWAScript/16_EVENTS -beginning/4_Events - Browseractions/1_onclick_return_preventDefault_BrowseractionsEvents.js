/* JawaScript - 1_onclick_return_preventDefault_BrowseractionsEvents               
Есть два способа отменить действие браузера:

    -Основной способ – это воспользоваться объектом event. 
     Для отмены действия браузера существует стандартный метод event.preventDefault().

    -Если же обработчик назначен через on<событие> (не через addEventListener), 
     то также можно вернуть false из обработчика.
*/

'use strict';
alert("Start 1_onclick_return_preventDefault_BrowseractionsEvents");


// возвращаем false из обработчика в атрибутах


alert("End");