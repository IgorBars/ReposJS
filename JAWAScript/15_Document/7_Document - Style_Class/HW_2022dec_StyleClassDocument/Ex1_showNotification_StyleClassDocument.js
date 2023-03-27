/* JawaScript - Ex1_showNotification_StyleClassDocument         

Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
Уведомление должно автоматически исчезнуть через 1,5 секунды.

*/

'use strict';
alert("Start Ex1_showNotification_StyleClassDocument"); 


function showNotification({top = 0, right = 0, className, html = 'Welcome'}) {

    let div = document.createElement('div');
    document.body.append(div);

    div.style.display = "";

    div.className = "notification";         // .className   (!!!)
    div.innerHTML = html;
    div.style.top = top + 'px';      // top - абсолютньій отступ от края -позиционирование (а не внешние отступы "margin")
    div.style.right = right + 'px';

    if (className) {
        div.classList.add(className);
    }

    div.style.cssText += `background: rgb(249, 46, 46); font-size: 30px`

    // let timerId = setTimeout(() => div.style.display = "none", 1500);
    let timerId = setTimeout(() => div.remove(), 1500);
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