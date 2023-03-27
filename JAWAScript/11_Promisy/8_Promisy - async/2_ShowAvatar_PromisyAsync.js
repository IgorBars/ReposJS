/* JawaScript - 2_ShowAvatar_PromisyAsync

*/
'use strict';

alert("Start 2_ShowAvatar_PromisyAsync");

function loadJson(url) {                        // отримати (з Github) json-файл з масивом користувачів 
  return fetch(url)
    .then(response => response.json());
}
  
function loadGithubUser(log) {                  // завантажити з Github json-файл користувача по його логіну
  return fetch(`https://api.github.com/users/${log}`)
    .then(response => response.json());
}

function showAvatar(githubUser) {               // оброюляемо json-файл користувача з Github
  return new Promise(function(resolve, reject) {// повертаємо проміс для можливості наступних (за showAvatar) дій через setTimeout
    let img = document.createElement('img');    // створення віртуального тегу <img>
    img.src = githubUser.avatar_url;            // githubUser.avatar_url - стандартна адреса аватара користувача на Github
    img.className = "promise-avatar-example";
    document.body.append(img);                  // добавлення віртуального тегу <img> на html-сторінку
    
    setTimeout(() => {                          // встановлення затримки до знищення віртуального тегу <img>
      img.remove();           // фактически удалится после инструкций alert в следующем then  (?)
      resolve(githubUser);                    //  повертаємо githubUser для подальшої обробки у наступному then
    }, 500); 
  });
}
  
  // Используем их:
loadJson('https://api.github.com/users')//загрузка массива ползователей (name = login) 
  .then(users => loadGithubUser(users[0].login))  // users - масив користувачів (0-29)
  .then(showAvatar)
      // подальша (після showAvatar) обробка json-файлу користувача (githubUser)
    // .then(githubUser => new Promise(function(resolve, reject) {    // можна повернути проміс, щоб додати якусь затримку
  .then(githubUser =>  {                                              // немає затримки часу, тому then без промісу
    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
    // return resolve(githubUser);                                  // якщо повертати проміс, то return resolve
    return githubUser;
  })
  // .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`)); 

alert("End");

