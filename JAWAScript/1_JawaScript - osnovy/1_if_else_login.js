/* JawaScript - 1_if_else_login - Проверка логина */

// однострочный комментарий

'use strict';

alert("Start 1_if_else_login");

let log = prompt("Вв логин",);
if (log == "admin") {
    let par = prompt("Вв пароль");

    if (par == "Я главный") {
        alert("Здравствуйте!");
    }
    else if (!par) {            // true при "", "Отмена", "Esc"
        alert("Отменено");
    }
    else alert("Неверный пароль");//любой ввод в текст.строку кроме "Я главный"
}

else if (!log) {                // true при "", "Отмена", "Esc"
    alert("Отменено"); 
}
else alert("Я Вас не знаю");////любой ввод в текст.строку кроме "admin"


alert("End");