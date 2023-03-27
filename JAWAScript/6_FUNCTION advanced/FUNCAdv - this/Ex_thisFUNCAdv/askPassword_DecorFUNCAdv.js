/* JawaScript - askPassword_DecorFUNCAdv.
    Исправьте выделенную строку, чтобы всё работало
 */
'use strict';

alert("Start askPassword_DecorFUNCAdv");

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// user.loginOk();
// user.loginFail();


alert("End");
