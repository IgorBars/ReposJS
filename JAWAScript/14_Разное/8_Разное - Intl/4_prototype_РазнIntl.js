/* JawaScript - 4_prototype_РазнIntl                Методы в прототипах Date, String, Number

Методы форматирования также поддерживаются в обычных строках, датах, числах:
*/

'use strict';
alert("Start 4_prototype_РазнIntl");


// String.prototype.localeCompare(that [, locales [, options]])
// Сравнивает строку с другой, с учётом локали, например:
let str = "ёжик";
alert( str.localeCompare("яблоко", "ru") );            // -1


// Date.prototype.toLocaleString([locales [, options]])
// Форматирует дату в соответствии с локалью, например:
let date = new Date(2022, 11, 16, 17, 0);
alert( date.toLocaleString("ru", { year: 'numeric', month: 'long' }) ); // декабрь 2022 г.


// Date.prototype.toLocaleDateString([locales [, options]])
// То же, что и выше, но опции по умолчанию включают в себя      год, месяц, день

// Date.prototype.toLocaleTimeString([locales [, options]])
// То же, что и выше, но опции по умолчанию включают в себя часы, минуты, секунды



// Number.prototype.toLocaleString([locales [, options]])
// Форматирует число, используя опции Intl.NumberFormat.

// Все эти методы при запуске создают соответствующий объект Intl.* и передают ему опции, 
// можно рассматривать их как укороченные варианты вызова.

alert("End");

