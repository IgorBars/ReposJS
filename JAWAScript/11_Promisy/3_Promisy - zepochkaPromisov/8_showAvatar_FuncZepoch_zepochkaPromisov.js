/* JawaScript - 8_showAvatar_FuncZepoch_zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий
Информацию о name берем на https://api.github.com/users (= "login")
(всего 30 пользователей)
*/
'use strict';

alert("Start 8_showAvatar_FuncZepoch_zepochkaPromisov");


function loadJson(url) {
  return fetch(url)
    .then(response => response.json()); //массив объектов пользователей
}

function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json()); //объект пользователя
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);  // позволяет очередность загрузки аватаров
    }, 200);                                // timeout > 200
  });
}

// Используем их:

 loadJson('https://api.github.com/users') //загрузка массива пользователей "name" (= login): c https://api.github.com/users
  .then(user => loadGithubUser(user[29].login))// 0-29
  .then(showAvatar)
    .then(githubUser => new Promise(function(resolve, reject) {
    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
    return resolve(githubUser);
  }))
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`))
    
    .then(githubUser => { // с фигурными скобками, точкозапятой и RETURN
    alert("Новый пользователь");
    return loadJson('https://api.github.com/users')
    })
  // .then(githubUser => (  //с круглыми скобками и запятой
  //   alert("Новый пользователь"), 
  //   loadJson('https://api.github.com/users')
  // ))
  .then(user => loadGithubUser(user[18].login))// 0-29
  .then(showAvatar)
    .then(githubUser => new Promise(function(resolve, reject) {
    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
    return resolve(githubUser);
  }))
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`))

  .then(githubUser => (  //с круглыми скобками и запятой
    alert("Новый пользователь"), 
    loadJson('https://api.github.com/users')
  ))
  .then(user => loadGithubUser(user[16].login))// 0-29
  .then(showAvatar)
    .then(githubUser => new Promise(function(resolve, reject) {
    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
    return resolve(githubUser);
  }))
  .then(githubUser => {alert(`Показ аватара ${githubUser.name} завершён`);
                      alert("Конец цепочки промисов")
  })
  ;
  // ...


alert("End");

