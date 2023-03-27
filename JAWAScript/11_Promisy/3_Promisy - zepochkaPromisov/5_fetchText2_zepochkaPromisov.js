/* JawaScript - 5_fetchText2_zepochkaPromisov
*/
'use strict';
alert("Start 5_fetchText2_zepochkaPromisov");



fetch('https://api.github.com/users/iliakan')

  .then(response => response.text())  // хочемо отримати весь текст, отже - response.text()

  .then(user => alert(user))      // { "login": "iliakan", ...}

  .catch(alert);


  // let fet = fetch('https://api.github.com/users/iliakan')

  // fet.then(response => response.text())  // хочемо отримати весь текст, отже - response.text()
  
  //   .then(user => alert(user))      // { "login": "iliakan", ...}
  
  //   .catch(alert);



alert("End"); 

