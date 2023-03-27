/* JawaScript - 3_Promisify_loadScript_PromisyPromisific
На практике нам, скорее всего, понадобится промисифицировать не одну функцию, 
поэтому имеет смысл сделать для этого специальную «функцию-помощник».

Мы назовём её   promisify(f) – она принимает функцию для промисификации f и возвращает функцию-обёртку.
*/
'use strict';

alert("Start  3_Promisify_loadScript_PromisyPromisific");

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  
    document.head.append(script);
}

let promisify = function(f) {
    return function(...args) {      // собираем аргументьі в массив args
        return new Promise((resolve, reject) => {
            function collback(err, script) {
                if(err) reject(err)
                else resolve(script)
            };
            args.push(collback);
            f.call(this, ...args);  //распаковьіваем аргументьі из массива args
        });
    };
};

let loadScriptPromisify = promisify(loadScript);

loadScriptPromisify('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
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

