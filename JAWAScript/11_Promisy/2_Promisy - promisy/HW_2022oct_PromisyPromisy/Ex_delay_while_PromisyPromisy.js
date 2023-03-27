/* JawaScript - Ex_delay_while_PromisyPromisy
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
так чтобы мы могли добавить к нему .then
*/
'use strict';
alert("Start Ex_delay_while_PromisyPromisy");


function delay(ms) {
    return new Promise(function (resolve, reject) {
        let start = Date.now();

        while(true) {                                   // тягнемо час у циклі
            if(new Date() >= start + ms) {
                break;
            }
        }
        resolve(`выполнилось через ${ms/1000} секунды`)
    }
)}

// let timePromise = delay(3000); timePromise.then(alert);

// delay(3000).then((result) => alert(result)); // выполнилось через 3 секунды
delay(4500).then((result) => alert(result));    // выполнилось через 4.5 секунды


alert("End");

