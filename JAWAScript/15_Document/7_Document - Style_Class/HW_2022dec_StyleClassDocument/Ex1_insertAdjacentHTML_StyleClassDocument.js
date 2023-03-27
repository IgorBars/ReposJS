/* JawaScript - Ex1_insertAdjacentHTML_StyleClassDocument         

Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
Уведомление должно автоматически исчезнуть через 1,5 секунды.

*/

'use strict';
alert("Start Ex1_insertAdjacentHTML_StyleClassDocument"); 

function showNotification({top = 0, right = 0, className, html = 'Welcome'}) {
    document.body.insertAdjacentHTML('afterbegin', 
    `<div id="js" class="notification ${className}" style="top: ${top}px; right: ${right}px">${html}</div>`);   
    setTimeout(() => document.getElementById('js').remove(), 1500);     
}



// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
let i = 1;
setInterval(() => {
    showNotification({
        top: 30, // 10px от верхней границы окна (по умолчанию 0px)
        right: 30, // 10px от правого края окна (по умолчанию 0px)
        html: 'HTML-уведомление: Hello! ' + i++, // HTML-уведомление
        className: "welcome" // дополнительный класс для div (необязательно)
    });
}, 2000);

alert("End");