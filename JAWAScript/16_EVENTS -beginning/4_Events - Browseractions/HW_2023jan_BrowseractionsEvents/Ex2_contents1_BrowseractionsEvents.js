/* JawaScript - Ex2_contents1_BrowseractionsEvents               
Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

Детали:

    -Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
     Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.

    -Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
*/

'use strict';
alert("Start Ex2_contents1_BrowseractionsEvents");                                                                              // ТРЕНИНГ


let contents = document.getElementById('contents');

contents.addEventListener('click', function(event){

    let target = event.target.closest('a');     // ближайший родитель с именем "A" (включая сам елемент)

    if(!target) return;                         // contents.style.backgroundColor = 'yellow'; // проверка перехвата на ссьілках

    let href = target.getAttribute('href');

    if ( confirm(`Leave for ${href}?`) ) return;

    event.preventDefault();
})




alert("End");