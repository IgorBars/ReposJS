/* JawaScript - HW_asyncDemoGithubUser3_AsyncPromisy
Перепишите, используя async/await.
В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.


*/
'use strict';
alert("Start HW_asyncDemoGithubUser3_AsyncPromisy");

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    
    if (response.status == 200) {
      return response.json();
    }
    
    throw new HttpError(response);
  }
  
  async function demoGithubUser() {
    while (true) {
      try {
        let name = prompt("Введите логин?", "iliakan");
        let user = await loadJson(`https://api.github.com/users/${name}`);
        
        alert(`Полное имя: ${user.name}`);
        return user;
        
      } catch (err) {
          if (err instanceof HttpError && err.response.status == 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          } else {
            throw err;
          }
      }
    }
  }
  
  demoGithubUser();


alert("End");

