/* JawaScript - form*/

// однострочный комментарий

'use strict';
let userName = prompt("Введите Ваше имя", "");
if(userName == null || userName == "") alert(`Извините, Вы не ввели Ваше имя!`);
else(alert(`Здравствуйте, ${userName}!`));