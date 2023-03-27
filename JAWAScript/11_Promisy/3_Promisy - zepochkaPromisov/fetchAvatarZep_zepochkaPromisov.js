/* JawaScript - _zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий

*/
'use strict';

alert("Start fetchAvatarZep_zepochkaPromisov");

// Запрашиваем user.json 
fetch('https://api.github.com/users') //получаем массив объектов
  // Загружаем данные в формате json (чтобы иметь возм обработать)
  .then(response => response.json())
  // Делаем запрос к GitHub по логину из объекта
  .then(user => fetch(`https://api.github.com/users/${user[10].login}`))
// fetch(`https://api.github.com/users/remy`)// или напрямую по изв url
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => new Promise(function(resolve, reject) { //оборачиваем в промис, 
  // чтобы следующий промис начинался после выполнения этого (после картинки)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => {
        img.remove();
        resolve (githubUser);
        }, 500); // через .5 сек вызовется следующий обработчик then
  })).then(githubUser => alert(`Имя: ${githubUser.name}`) )

//  Новый пользователь 
  .then(() => fetch('https://api.github.com/users') )
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user[11].login}`))
  .then(response => response.json())
  .then(githubUser => new Promise (function(resolve, reject){
    setTimeout(() => {  //  ПАУЗА: создаем следующий аватар через 0,5 с
                        //  после удаления предыдущего
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
      setTimeout(() => {
          img.remove();
          resolve (githubUser);
          }, 500);
    }, 500);  //  удаляем текущий аватар через 2 с после начала показа

  })).then(githubUser => alert(`Имя: ${githubUser.name}`) )

//  Новый пользователь 
  .then(() => fetch('https://api.github.com/users') )
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user[12].login}`))
  .then(response => response.json())
  .then(githubUser => new Promise (function(resolve, reject){
    setTimeout(() => {  //  ПАУЗА: создаем следующий аватар через 0,5 с
                        //  после удаления предыдущего
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
      setTimeout(() => {
          img.remove();
          resolve (githubUser);
          }, 500);
    }, 500);  //  удаляем текущий аватар через 2 с после начала показа

  })).then(githubUser => alert(`Имя: ${githubUser.name}`) )
  ;

//Как правило, все асинхронные действия должны возвращать промис.
//Это позволяет планировать после него какие-то дополнительные действия.

//Если обработчик в .then (или в catch/finally, без разницы) возвращает промис, 
//последующие элементы цепочки ждут, пока этот промис выполнится.

alert("End");

