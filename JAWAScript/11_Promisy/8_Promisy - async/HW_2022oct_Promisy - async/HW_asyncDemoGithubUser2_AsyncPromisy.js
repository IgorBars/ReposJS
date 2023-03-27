/* JawaScript - HW_asyncDemoGithubUser2_AsyncPromisy
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
alert("Start HW_asyncDemoGithubUser2_AsyncPromisy");

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
      
        if (response.status == 200) {   alert("status =" + response.status);
        //   let json = await response.json(); // в demoGithubUser все рівно приймає await loadJson
        //   return json;
        return response.json();

        } else {   alert("Errorstatus =" + response.status);
          throw new HttpError(response);
        }
}
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let user;

    while (true) {
            let name = prompt("Введите логин?", "iliakan"); // aaaaaa
    
        try{
            user = await loadJson(`https://api.github.com/users/${name}`);
            break; // ошибок не было, выходим из цикла
            
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                // после alert начнётся новая итерация цикла
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");

            } else {
                alert("Якась дивна помилка");
            //   throw err; // пробрасываем неизвестную ошибку
            }
        }
    }
    
    alert(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();

// loadJson(`https://api.github.com/users/mojombo`)             // код для перевірки синтаксису loadJson
//     .then(githubUser => alert(`Имя: ${githubUser.name}`))    // Имя: Tom Preston-Werner
//     .catch(alert); // 


alert("End");

