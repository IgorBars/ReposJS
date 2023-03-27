/* JawaScript - 3_newWindow_open_OpenWindFrames               Доступ к попапу из основного окна

Вызов open возвращает ссылку на новое окно. Эта ссылка может быть использована для управления свойствами окна, 
например, изменения положения и др.

Например, здесь мы генерируем содержимое попапа из JavaScript после загрузки:
*/

'use strict';
alert("Start 3_newWindow_open_OpenWindFrames");



let button = document.getElementById('button');

button.onclick = () => {
  let newWindow = window.open("about:blank", 'example', 'width=300,height=300,left=150,top=150');
  // let newWindow = window.open("https://javascript.info", 'example', 'width=300,height=300,left=150,top=150');
  newWindow.focus();

  alert(newWindow.location.href); // (*) about:blank - подстановка браузером спецстраницьі, (для любого адреса) загрузка ещё не началась

  // newWindow.onload = function() {                                     // НЕ ПОЛУЧАЕТСЯ
  // newWindow.document.addEventListener('DOMContentLoaded', function() {         // НЕ ПОЛУЧАЕТСЯ
    let html = `<div style="font-size:30px">Добро пожаловать!</div>`;
    newWindow.document.body.insertAdjacentHTML('afterbegin', html);       // ПОЛУЧАЕТСЯ только в спецстраницу браузера
  // };
};

// Таким образом нельзя проверить запись в содержимое попапа с конкретного домена: 
//  - содержание попапа с чужого домена нельзя изменить (из-за кроссдоменной политики)("Политика одного источника")


alert("End");