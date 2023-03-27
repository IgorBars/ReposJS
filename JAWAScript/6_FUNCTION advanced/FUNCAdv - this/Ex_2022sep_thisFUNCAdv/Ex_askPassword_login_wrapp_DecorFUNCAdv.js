/* JawaScript - Ex_askPassword_login_wrapp_DecorFUNCAdv.

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok 
и функцию user.login(false) как fail?
 */
'use strict';

alert("Start Ex_askPassword_login_wrapp_DecorFUNCAdv");

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }

};
  
askPassword( () => user.login(true), () => user.login(false) ); // используем стрелочную функцию-обёртку.
// Вона за замовчуванням не має свого this, тому шукає його у зовнішньому лексичному середовищі. І там (у глобальному) знаходить



alert("End");
