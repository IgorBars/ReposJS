/* JawaScript - 3_newWin_open_OpenWindFrames               Доступ к попапу из основного окна

Вызов open возвращает ссылку на новое окно. Эта ссылка может быть использована для управления свойствами окна, 
например, изменения положения и др.

Например, здесь мы модифицируем содержимое попапа из JavaScript:

<button id="button" data-tooltip="but">Нажми на мне!</button>
*/

'use strict';
alert("Start 3_newWin_open_OpenWindFrames");



let button = document.getElementById('button');

button.onclick = () => {

  let newWin = window.open("about:blank", "hello", "width=200,height=200,left=150,top=150");

  newWin.document.write("Hello, world!"); 
};
// Таким образом нельзя проверить запись в содержимое попапа с конкретного домена: 
// 1. Попап с опр домена не успевает загрузиться (напр, нужно использовать собьітие onload)
// 2. Содержание попапа с чужого домена нельзя изменить (из-за кроссдоменной политики)




alert("End");