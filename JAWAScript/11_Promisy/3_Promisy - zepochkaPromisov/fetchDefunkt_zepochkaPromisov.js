/* JawaScript - _zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий
Информацию об интернетадресах берем на https://api.github.com/users
*/
'use strict';

alert("Start fetchDefunkt_zepochkaPromisov");

// Запрашиваем user.json 
fetch('https://api.github.com/users')
  // Загружаем данные в формате json
  .then(response => response.json())
  // Делаем запрос к GitHub
  .then(user => fetch(`https://api.github.com/users/${user[1].login}`))
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
    }, 3000);
  }))
    // срабатывает через 3 секунды
  .then(githubUser => new Promise(function(resolve, reject) { // здесь Promise избьіточен, т.к. не предусматривается никакая задержка
    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
    return resolve(githubUser);
  }))
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

