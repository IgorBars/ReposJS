/* JawaScript - _PromisyAsync

*/
'use strict';

alert("Start asyncShowAvatarLoginZF_PromisyAsync");

// async function showAvatar(num) {//в аргумент - номер пользователя в массиве
async function loadJson() {
// запрашиваем JSON с массивами данных пользователей
    let response = await fetch('https://api.github.com/users');
    let user = await response.json();
    return user;
}

async function showAvatar(num, user) {
// запрашиваем информацию об конкретном пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user[num].login}`);
    let githubUser = await githubResponse.json();


    // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 100 mсекунд и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 100));

  img.remove();

    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
  return user;
}

loadJson()
    .then(user => {
    showAvatar(29, user);
    showAvatar(26, user);
    showAvatar(25, user);
    showAvatar(23, user);
    });




alert("End");

