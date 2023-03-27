/* JawaScript - Ex2_contents2_BrowseractionsEvents               
Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

Детали:

    -Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
     Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.

    -Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
*/

'use strict';
alert("Start Ex2_contents2_BrowseractionsEvents");



let contents = document.getElementById('contents');

contents.onclick = function(event) {

    if ( !event.target.closest('A') ) return;    //closest('A') -поиск ближайшего родителя: тег А,     включая сам елемент

    let href = event.target.closest('A').getAttribute('href');

    return confirm(`Leave for ${href}?`);
};



alert("End");