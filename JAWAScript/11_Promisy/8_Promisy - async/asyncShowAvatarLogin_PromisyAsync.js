/* JawaScript - _PromisyAsync

*/
'use strict';

alert("Start asyncShowAvatarLogin_PromisyAsync");

async function showAvatar(num) {//в аргумент - номер пользователя в массиве

  // запрашиваем JSON с массивами данных пользователей
  let response = await fetch('https://api.github.com/users');
  let user = await response.json();

  // запрашиваем информацию об конкретном пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user[num].login}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 1 секунду и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));

  img.remove();

    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
  return githubUser;
}

showAvatar(28); //номер пользователя в массиве


alert("End");

