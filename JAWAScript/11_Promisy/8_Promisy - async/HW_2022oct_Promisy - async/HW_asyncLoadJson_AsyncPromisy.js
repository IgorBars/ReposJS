/* JawaScript - HW_asyncLoadJson_AsyncPromisy
Перепишите, используя async/await:

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
alert("Start HW_asyncLoadJson_AsyncPromisy");

async function loadJson(url) {
    let response = await fetch(url);

        if (response.status == 200) {
          let json = await response.json();
          return json;

        } else {
          throw new Error(response.status);
        }
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // TypeError: Failed to fetch            // на верхньому рівні вкладеності залишаємо catch як є


// loadJson(`https://api.github.com/users/mojombo`)             // код для перевірки синтаксису loadJson
//     .then(githubUser => alert(`Имя: ${githubUser.name}`))    // Имя: Tom Preston-Werner
//     .catch(alert); // 


alert("End");

