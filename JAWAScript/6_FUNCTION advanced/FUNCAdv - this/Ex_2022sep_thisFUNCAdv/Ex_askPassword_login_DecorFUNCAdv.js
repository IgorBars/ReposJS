/* JawaScript - Ex_askPassword_login_DecorFUNCAdv.
Исправьте функцию, теряющую "this"
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему?
Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok 
и функцию user.login(false) как fail?
 */
'use strict';

alert("Start Ex_askPassword_login_DecorFUNCAdv");

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
  
askPassword(user.login.bind(user, true), user.login.bind(user, false)); // 


// Синтаксис bind: let bound = func.bind(context, [arg1], [arg2], ...);

// Отже, щоб прив'язати до метода user.login(true)    контекст(user) і аргумент(true) =>
//                                  => user.login.BIND(USER, true)

alert("End");
