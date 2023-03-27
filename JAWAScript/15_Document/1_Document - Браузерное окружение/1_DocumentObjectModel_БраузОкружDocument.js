/* JawaScript - 1_DocumentObjectModel_БраузОкружDocument        DOM

Document Object Model, сокращённо DOM – объектная модель документа, 
которая представляет все содержимое страницы в виде объектов, которые можно менять.

Спецификация DOM описывает структуру документа и предоставляет объекты для манипуляций со страницей.
DOM Living Standard на https://dom.spec.whatwg.org

Спецификация CSSOM
Описывает файлы стилей, правила написания стилей и манипуляций с ними, а также то, как это всё связано со страницей, 
подробнее на https://www.w3.org/TR/cssom-1/.

Кроме того, некоторые классы описаны отдельно на https://spec.whatwg.org/.

Когда вам нужно будет прочитать о каком-то свойстве или методе, 
справочник на сайте Mozilla https://developer.mozilla.org/ru/search 

Для поиска чего-либо обычно удобно использовать интернет-поиск со словами «WHATWG [термин]» или «MDN [термин]», 
например https://google.com?q=whatwg+localstorage, https://google.com?q=mdn+localstorage.

Объект document – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице.
*/

'use strict';
alert("Start 1_DocumentObjectModel_БраузОкружDocument");


// заменим цвет фона на красный,
document.body.style.background = "red";


// а через секунду вернём как было
setTimeout(() => document.body.style.background = "", 4000);



// возможности по управлению страницей намного шире. Различные свойства и методы описаны в спецификации:
 

alert("End");