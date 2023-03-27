/* JawaScript - 2_scriptonerror_onloadonerrLoadDoc               script.onerror

Ошибки, которые возникают во время загрузки скрипта, могут быть отслежены с помощью события error.

Например, давайте запросим скрипт, которого не существует:
*/

'use strict';
alert("Start 2_scriptonerror_onloadonerrLoadDoc");


let script = document.createElement('script');
script.src = "https://example.com/404.js"; // такого файла не существует
document.head.append(script);

script.onerror = function() {
  alert("Ошибка загрузки " + this.src); // Ошибка загрузки https://example.com/404.js
};



alert("End");