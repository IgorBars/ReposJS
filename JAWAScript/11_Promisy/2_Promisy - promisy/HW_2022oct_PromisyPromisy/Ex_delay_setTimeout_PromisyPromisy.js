/* JawaScript - Ex_delay_setTimeout_PromisyPromisy
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
так чтобы мы могли добавить к нему .then
*/
'use strict';
alert("Start Ex_delay_setTimeout_PromisyPromisy");


function delay(ms) {
    return new Promise(function (resolve, reject) {

        // setTimeout(() => resolve(), ms);                                     // без аргумента в колбеке
        setTimeout(() => resolve(`выполнилось через ${ms/1000} секунды`), ms);
    } 
)}

// delay(3000).then(() => alert('выполнилось через 3 секунды'));
let timePromise = delay(3000); timePromise.then(alert);




alert("End");

