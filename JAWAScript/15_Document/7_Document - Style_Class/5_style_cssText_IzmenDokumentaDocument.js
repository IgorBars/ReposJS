/* JawaScript - 5_style_cssText_IzmenDokumentaDocument         Полная перезапись: свойство cssText   об'ьекта elem.style
                                                УСТАНОВКА СТРОКОЙ НЕСКОЛЬКИХ СТИЛЕЙ ЕЛЕМЕНТА С ПОМОЩЬЮ JS

Обычно мы используем style.* для присвоения индивидуальных свойств стиля.
Для задания нескольких стилей в одной строке используется специальное свойство style.cssText:

<body>
    <div id="div">Button</div>
        
    <script src="5_style_cssText_IzmenDokumentaDocument.js"></script>
</body>
*/

'use strict';
alert("Start 5_style_cssText_IzmenDokumentaDocument");


let div = document.getElementById('div');

// можем даже устанавливать специальные флаги для стилей, например, "important"
div.style.cssText=`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
`;

alert(div.style.cssText);   // background-color: yellow; width: 100px; text-align: center; color: red !important;
alert(div.style.color);     // red

/*
(Это свойство редко используется, потому что такое присваивание удаляет все существующие стили: оно не добавляет, 
а заменяет их. 
То же самое можно сделать установкой атрибута: div.setAttribute('style', 'color: red...')   )

Но можно добавить строку прибавлением, а не заменой:
div.style.cssText += `background: rgb(249, 46, 46); font-size: 30px`
*/
alert("End");