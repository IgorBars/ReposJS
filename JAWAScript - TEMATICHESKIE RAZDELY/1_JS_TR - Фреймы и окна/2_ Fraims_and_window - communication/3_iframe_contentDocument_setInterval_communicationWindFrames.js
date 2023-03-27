/* JawaScript - 3_iframe_contentDocument_setInterval_communicationWindFrames               

Нам не следует работать с документом ещё не загруженного ифрейма, так как это не тот документ. 
Если мы поставим на него обработчики событий – они будут проигнорированы.

Как поймать момент, когда появится правильный документ?

Можно проверять через setInterval:

<iframe src="http://192.168.1.1/" id="iframe"></iframe>
*/

'use strict';
alert("Start 3_iframe_contentDocument_setInterval_communicationWindFrames");



let iframe = document.getElementById('iframe');

let oldDoc = iframe.contentDocument;

// каждый 100 мс проверяем, не изменился ли документ
let timer = setInterval(() => {
  let newDoc = iframe.contentDocument;
  if (newDoc == oldDoc) return;

  alert("New document is here!");                                       // (своя страница роутера грузится без задержки)

  clearInterval(timer); // отключим setInterval, он нам больше не нужен
}, 1);



alert("End");