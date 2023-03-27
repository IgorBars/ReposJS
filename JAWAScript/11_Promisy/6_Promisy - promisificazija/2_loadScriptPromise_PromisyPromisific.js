/* JawaScript - 2_loadScriptPromise_PromisyPromisific
Давайте промисифицируем её. Новая функция loadScriptPromise(src) будет делать то же самое, 
но будет принимать только src (не callback) и возвращать промис.
*/
'use strict';

alert("Start  2_loadScriptPromise_PromisyPromisific");

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  
    document.head.append(script);
}
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (err, script) => {
//   alert(`Здорово, скрипт ${script.src} загрузился`);
//   alert( _ ); // функция, объявленная в загруженном скрипте
// });

let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if(err) reject(err)
            else resolve(script)
        })
    });
};

loadScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
    .then (
        script => {
            alert(`Здорово, скрипт ${script.src} загрузился`);  // Здорово, скрипт https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js загрузился
            alert( _ ); // функция, объявленная в загруженном скрипте
        },
        err => {
            alert(err);
        }
    );


alert("End");

