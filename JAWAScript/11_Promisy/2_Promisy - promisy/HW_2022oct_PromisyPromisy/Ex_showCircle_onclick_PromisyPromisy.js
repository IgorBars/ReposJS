/* JawaScript - Ex_showCircle_onclick_PromisyPromisy
Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, 
чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
*/
'use strict';
alert("Start Ex_showCircle_onclick_PromisyPromisy");    // СМОТРЕТЬ HTML-файл!!!

// function showCircle(cx, cy, radius, callback) {                  // - исходная функция с колбеком
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         callback(div);
//       });
//     }, 0);
// }


function showCircle(cx, cy, radius) {                                   // варіант з промісом
        let div = document.createElement('div');
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        div.className = 'circle';
        document.body.append(div);

        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                div.style.width = radius * 2 + 'px';
                div.style.height = radius * 2 + 'px';

                div.addEventListener('transitionend', function handler() {
                    div.removeEventListener('transitionend', handler);
                    resolve(div);
                });
            }, 0);
        });
}

function go() {
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
}


alert("End");

