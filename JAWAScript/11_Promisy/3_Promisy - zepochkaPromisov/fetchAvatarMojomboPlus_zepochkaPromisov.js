/* JawaScript - _zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий
Информацию об интернетадресах берем на https://api.github.com/users
*/
'use strict';

alert("Start fetchAvatarMojomboPlus_zepochkaPromisov");

// Запрашиваем user.json (изменил путь!!!)
// fetch('/article/promise-chaining/user.json')// имя со своей папки
  // Загружаем данные в формате json
  // .then(response => response.json())
  // Делаем запрос к GitHub
  // .then(user => fetch(`https://api.github.com/users/${name}`))
fetch(`https://api.github.com/users/mojombo`)// или напрямую по изв url
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
        img.remove();
        resolve(githubUser); // (**)
    }, 1000);
  }))
    // срабатывает через 1 секунду, т.к. resolve был помещен в setTimeout
  .then(githubUser =>  {
    alert(`Локация: ${githubUser.location}`);
    return githubUser;
  })
  .then(githubUser => alert(`Закончили показ ${githubUser.name}`))
  ;

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

