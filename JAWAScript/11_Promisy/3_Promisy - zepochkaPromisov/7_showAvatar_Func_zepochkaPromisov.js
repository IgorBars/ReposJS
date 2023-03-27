/* JawaScript - 7_showAvatar_Func_zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий
Как правило, все асинхронные действия должны возвращать промис.
Это позволяет планировать после него какие-то дополнительные действия. 

Информацию о name берем на https://api.github.com/users (= "login")
(всего массив из 30-ти пользователей)
*/
'use strict';

alert("Start 7_showAvatar_Func_zepochkaPromisov");


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
      img.remove();
      resolve(githubUser);                    //  повертаємо githubUser для подальшої обробки у наступному then
    }, 3000);
  });
}

// Используем их:
loadJson('https://api.github.com/users')//загрузка массива ползователей (name = login) 
  .then(users => loadGithubUser(users[0].login))  // users - масив користувачів (0-29)
  .then(showAvatar)
     // подальша (після showAvatar) обробка json-файлу користувача (githubUser)
    // .then(githubUser => new Promise(function(resolve, reject) {              // можна повернути проміс, щоб додати якусь затримку
  .then(githubUser =>  {                                              // немає затримки часу, тому then без промісу
    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
    // return resolve(githubUser);                                  // якщо повертати проміс, то return resolve
    return githubUser;
  })
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
  // ...


//То есть, обработчик .then в строке (*) будет возвращать new Promise, 
//который перейдёт в состояние «выполнен» только после того, 
//как в setTimeout (**) будет вызвана resolve(githubUser).

//КОРОЧЕ ВОЗВРАЩАЕМ СНОВА ПРОМИС, В КОЛБЕК resolve КОТОРОГО ПОМЕЩАЕМ githubUser - 
// - ТЕКУЩИЙ ОБРАБАТЫВАЕМЫЙ РЕЗУЛЬТАТ, ВОЗВРАЩЕННЫЙ ПРЕДЫДУЩИМ ПРОМИСОМ
// (ПЕРЕДАЕМ ДАЛЬШЕ ПО ЦЕПОЧКЕ)



//Как правило, все асинхронные действия должны возвращать промис.
//Это позволяет планировать после него какие-то дополнительные действия.

//Если обработчик в .then (или в catch/finally, без разницы) возвращает промис, 
//последующие элементы цепочки ждут, пока этот промис выполнится.

alert("End");

