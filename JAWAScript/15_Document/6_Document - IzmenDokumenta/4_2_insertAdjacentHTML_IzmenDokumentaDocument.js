/* JawaScript - 4_2_insertAdjacentHTML_IzmenDokumentaDocument         insertAdjacentHTML

- Позволяет добавлять произвольный HTML на страницу.

Вставить HTML именно «как html», со всеми тегами и прочим, как делает это elem.innerHTML:

    -elem.insertAdjacentHTML(where, html)

Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. 
Значение должно быть одним из следующих:
    - "beforebegin" – вставить html непосредственно перед elem,
    - "afterbegin" – вставить html в начало elem,
    - "beforeend" – вставить html в конец elem,
    - "afterend" – вставить html непосредственно после elem.
Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».
*/

'use strict';
alert("Start 4_2_insertAdjacentHTML_IzmenDokumentaDocument");

let div = document.getElementById('div');

div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');

div.insertAdjacentHTML('afterend', '<p>Пока</p>');

/*
У метода есть два брата:

    - elem.insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется «как текст» (а не HTML),
    - elem.insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент elem.
    
Они существуют, в основном, чтобы унифицировать синтаксис. 
*/

alert("End");