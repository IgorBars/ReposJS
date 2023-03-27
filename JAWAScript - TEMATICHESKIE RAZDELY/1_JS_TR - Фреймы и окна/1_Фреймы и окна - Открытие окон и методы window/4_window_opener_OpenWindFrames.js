/* JawaScript - 4_window_opener_OpenWindFrames               Доступ к открывшему окну из попапа

Попап также может обратиться к открывшему его окну по ссылке window.opener. Она равна null для всех окон, кроме попапов.

Если вы запустите код ниже, то он заменит содержимое открывшего (текущего) окна на «Тест»:
*/

'use strict';
alert("Start 4_window_opener_OpenWindFrames");



let button = document.getElementById('button');

button.onclick = () => {
  let newWin = window.open("about:blank", 'example', 'width=300,height=300,left=150,top=150');

  newWin.document.write(
    "<script>window.opener.document.body.innerHTML = 'Тест'</script>"
  );
};




alert("End");