/* JawaScript - Ex_delay_arrow_setTimeout_PromisyPromisy
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
так чтобы мы могли добавить к нему .then
*/
'use strict';
alert("Start Ex_delay_arrow_setTimeout_PromisyPromisy");



function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );   // без колбека reject (не исп в решении)
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));




alert("End");

