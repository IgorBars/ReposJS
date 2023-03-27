/* JawaScript - _PromisyAsync
    Перепишите один из примеров раздела Цепочка промисов,
используя async/await вместо .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
*/
'use strict';

alert("Start HW_loadJson_PromisyAsync");

async function loadJson(url) {
  
    let response = await fetch(url);
       
      if (response.status == 200) {
        return response.json();
      } else {
          alert("Error");
          return new Error("Ошибка загрузки");
      }   
}

  // loadJson('no-such-user.json') // (3)
  // .catch(alert); // Error: 404

async function GithubUser() {
  // let user = await loadJson('no-such-user.json');
  let user = await loadJson('https://api.github.com/users/iliakan');
  user.then(alert(user.name));
}
GithubUser()
.catch(alert);

alert("End");

