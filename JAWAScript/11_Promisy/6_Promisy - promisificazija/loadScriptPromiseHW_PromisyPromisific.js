/* JawaScript - _PromisyPromisific

*/
'use strict';

alert("Start loadScriptPromiseHW_PromisyPromisific"); //  



function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);//важно проставить null !
//чтобы результат в loadScript(src, (err, script)..) вернулся в свою поз (script)
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  document.head.append(script);
}

let loadScriptPromise = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => { alert("script: " + script); alert("err: " + err);           
            if (err) reject(err);
            else resolve(script);
        });
    });
};

loadScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
.then(script => {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    alert( _ );
    },
    err => {alert(err); }    
);

// Этот промис отработает быстрее, поэтому выведется первым
loadScriptPromise('https://nosach_url.js')   // несуществующий адрес
.then(script => {
        alert(`Здорово, скрипт ${script.src} загрузился`);
        alert( _ );
        },
    err => {alert(err); }
);


alert("End");