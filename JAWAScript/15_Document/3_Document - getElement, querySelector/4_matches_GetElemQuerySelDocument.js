/* JawaScript - 4_matches_GetElemQuerySelDocument       elem.matches(css) - МЕТОДЬІ ПОИСКА

Метод elem.matches(css) ("наличие") ничего не ищет, а проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false.

Этот метод удобен, когда мы перебираем элементы (например, в массиве или в чём-то подобном) и пытаемся выбрать те из них, 
которые нас интересуют.
*/

'use strict';
alert("Start 4_matches_GetElemQuerySelDocument");

// .matches - проверка тех, что соответствуют CSS-селектору

// может быть любая коллекция вместо document.body.children
for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {        // $ - вьіражение-оконцовка
        // if (elem.matches('a[href*="file"]')) { // * - содержит в себе вьіражение
        alert("Ссылка на архив: " + elem.href ); elem.style.background = 'yellow';
    }
}




alert("End");