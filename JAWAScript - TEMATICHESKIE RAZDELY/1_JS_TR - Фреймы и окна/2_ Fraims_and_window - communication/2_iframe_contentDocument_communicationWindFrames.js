/* JawaScript - 2_iframe_contentDocument_communicationWindFrames               

С другой стороны, если у ифрейма тот же источник, то с ним можно делать всё, что угодно (доступ к iframe.contentDocument)

<!-- ифрейм с того же сайта -->
<iframe src="http://192.168.1.1/" id="iframe"></iframe>
*/

'use strict';
alert("Start 2_iframe_contentDocument_communicationWindFrames");



let iframe = document.getElementById('iframe');

iframe.onload = function() {
  // делаем с ним что угодно  ( НЕ РАБОТАЕТ с чужим доменом)
  iframe.contentDocument.body.prepend("Привет, мир!");  // Привет, мир! (в учебнике вставлено в начале содержимого своего сайта)
};



alert("End");