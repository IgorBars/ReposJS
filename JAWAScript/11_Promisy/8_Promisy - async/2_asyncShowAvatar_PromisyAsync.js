/* JawaScript - 2_asyncShowAvatar_PromisyAsync

*/
'use strict';

alert("Start 2_asyncShowAvatar_PromisyAsync");

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

  // ждём 1 секунду и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));

  img.remove(); // но сначала вьіполнятся последующие инструкции alert (в том числе в последующих then)

  alert(`Имя: ${githubUser.name}`);
  alert(`Логин: ${githubUser.login}`);
  alert(`Фирма: ${githubUser.company}`);
  alert(`blog: ${githubUser.blog}`);
  alert(`location: ${githubUser.location}`);
  alert(`Показ аватара ${githubUser.name} завершён`);

  return githubUser;  // вернем githubUser для наличия в возвращаемом промисе добьітой из сети инф
}

// showAvatar();
showAvatar()
  .then(githubUser => alert(`POST Имя: ${githubUser.name}`)); // благодаря "return githubUser;" стр36

alert("End");

