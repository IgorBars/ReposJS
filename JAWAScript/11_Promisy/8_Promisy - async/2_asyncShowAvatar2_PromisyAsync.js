/* JawaScript - 2_asyncShowAvatar2_PromisyAsync

*/
'use strict';

alert("Start 2_asyncShowAvatar2_PromisyAsync");

async function showAvatar() {

  // запрашиваем JSON с массивами данных пользователей
  let response = await fetch('https://api.github.com/users');
  let user = await response.json();

  // запрашиваем информацию об конкретном пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user[28].login}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // чекаємо 50 мс відображення аватара (без затримки - не відобразиться)
  await new Promise((resolve, reject) => setTimeout(resolve, 50)); // 50мкс - с запасом, чтобьі успел загрузиться предьідущий img
  alert(`Имя: ${githubUser.name}`);
  alert(`Логин: ${githubUser.login}`);
  alert(`Фирма: ${githubUser.company}`);
  alert(`blog: ${githubUser.blog}`);
  alert(`location: ${githubUser.location}`);
  alert(`Показ аватара ${githubUser.name} завершён`);

  // видаляємо аватар користувача
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  img.remove();

  return githubUser;
}

showAvatar();


alert("End");

