/* JawaScript - HW_asyncDemoGithubUser_AsyncPromisy
Перепишите, используя async/await.
В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
  
    return loadJson(`https://api.github.com/users/${name}`)
      .then(user => {
        alert(`Полное имя: ${user.name}.`);
        return user;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }
  
  demoGithubUser();
*/
'use strict';
alert("Start HW_asyncDemoGithubUser_AsyncPromisy");   // Моя версия решения

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
    let json;
        if (response.status == 200) {
          json = await response.json();

          if (json.name != null)                  // бувають status = 200, але json.name = null
          return json;
        }
          alert("Errorstatus =" + response.status); // Errorstatus =404 ( Errorstatus =200 json.name = null )
          throw new HttpError(response);
}
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan"); // aaaaaa, za, qw: json: Shurui Li, az: Adam Zygadlewicz, rf: Russ Frank
                                                    // rfv: Riaan Francois Venter, edc: Eddie Cao, tg: Tomasz Grodzki
    try{
        let user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
    } catch(err) {
        if (err instanceof HttpError || err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          return demoGithubUser();

        } else {
            alert("Якась дивна помилка");
        //   throw err;
        }
    }
    return user;
}

demoGithubUser();

// loadJson(`https://api.github.com/users/mojombo`)             // код для перевірки синтаксису loadJson
//     .then(githubUser => alert(`Имя: ${githubUser.name}`))    // Имя: Tom Preston-Werner
//     .catch(alert); // 


alert("End");

