/* JawaScript - asyncShowAvatar_ArreyLogins_PromisyAsync

*/
'use strict';

alert("Start asyncShowAvatar_ArreyLogins_PromisyAsync");

async function showAvatar(num) {//в аргумент - номер пользователя в массиве

// запрашиваем JSON с массивами данных пользователей
    let response = await fetch('https://api.github.com/users');
    let user = await response.json();
// }

// запрашиваем информацию об конкретном пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user[num].login}`);
    let githubUser = await githubResponse.json();


    // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 100 ms и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 100));

  img.remove();

    alert(`Имя: ${githubUser.name}`);
    alert(`Логин: ${githubUser.login}`);
    alert(`Фирма: ${githubUser.company}`);
    alert(`blog: ${githubUser.blog}`);
    alert(`location: ${githubUser.location}`);
  return user;
}


(async () => {
    await showAvatar(29);
    await showAvatar(26);
    await showAvatar(25);
    await showAvatar(23);
})();



alert("End");

