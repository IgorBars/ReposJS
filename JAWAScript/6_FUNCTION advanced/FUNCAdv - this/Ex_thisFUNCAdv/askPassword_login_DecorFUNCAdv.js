/* JawaScript - askPassword_login_DecorFUNCAdv.
    Исправьте выделенную строку, чтобы всё работало
 */
'use strict';

alert("Start askPassword_login_DecorFUNCAdv");

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    },
  
  };
  
  askPassword(user.login.bind(user, true), user.login.bind(user, false));


alert("End");
