/* JawaScript - 5_win_close_OpenWindFrames               Закрытие попапа

Чтобы закрыть окно: win.close()

Для проверки, закрыто ли окно: win.closed.

Технически метод close() доступен для любого окна, но window.close() будет игнорироваться большинством браузеров, 
если window не было создано с помощью window.open(). Так что он сработает только для попапов.

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
*/

'use strict';
alert("Start 5_win_close_OpenWindFrames");

let newWin;

let button = document.getElementById('button');

button.onclick = () => {
  newWin = window.open('https://javascript.info', 'example', 'width=300,height=300,left=100,top=100');

  // newWin.onload = function() {                   // через onload не работает
    setTimeout(() => {
      newWin.close();
      alert(newWin.closed) // true
    }, 1000); 
  // };
};




alert("End");