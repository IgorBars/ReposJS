/* JawaScript - 4_GitHub_commits_AsyncGnrIterGenerator      - СМОТРИМ В  console.log   !!!
Есть много онлайн-сервисов, которые предоставляют данные постранично. Например, когда нам нужен список пользователей, 
запрос возвращает предопределённое количество (например, 100) пользователей – «одну страницу», и URL следующей страницы.

Этот подход очень распространён, и речь не только о пользователях, а о чём угодно. 
Например, GitHub позволяет получать коммиты таким образом, с разбивкой по страницам:

  - Нужно сделать запрос на URL в виде https://api.github.com/repos/<repo>/commits.
  - В ответ придёт JSON с 30 коммитами, а также со ссылкой на следующую страницу в заголовке Link.
  - Затем можно использовать эту ссылку для следующего запроса, чтобы получить дополнительную порцию коммитов, и так далее.

1. Мы используем метод fetch браузера для загрузки с удалённого URL. Он позволяет при необходимости добавлять авторизацию 
и другие заголовки, здесь GitHub требует User-Agent.

2. Результат fetch обрабатывается как JSON, это опять-таки метод, присущий fetch.

3. Нужно получить URL следующей страницы из заголовка ответа Link. Он имеет специальный формат, поэтому мы используем 
   регулярное выражение. URL следующей страницы может выглядеть как https://api.github.com/repositories/93253246/commits?page=2,
   он генерируется самим GitHub.

4. Затем мы выдаём все полученные коммиты, а когда они закончатся – сработает следующая итерация while(url), 
   которая сделает ещё один запрос.

*/
'use strict';
alert("Start 4_GitHub_commits_AsyncGnrIterGenerator");  // СМОТРИМ В  console.log   !!!


async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;
  
    while (url) {
      const response = await fetch(url, { // (1)                                              (1-ша асинхронна інструкція)
        headers: {'User-Agent': 'Our script'}, // GitHub требует заголовок user-agent
      });
                                          //                                                  (2-га асинхронна інструкція)
      const body = await response.json(); // (2) ответ в формате JSON (массив коммитов) (загрузка одной стр)
  
      // (3) Ссылка на следующую страницу находится в заголовках, извлекаем её:

      // let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);  // код від Іллі Кантора
      let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/)[1];  // добавив [1], як 2-й елемент масиву [<https://api.github.com/repositories/93253246/commits?page=2>; rel="next",https://api.github.com/repositories/93253246/commits?page=2]

                        //  alert(nextPage); // <https://api.github.com/repositories/93253246/commits?page=2>; rel="next",https://api.github.com/repositories/93253246/commits?page=2

      // nextPage = nextPage && nextPage[1];  // код від Іллі Кантора
  
      url = nextPage; //   null або посилання на наступну сторінуку
      // (4) вернуть коммиты один за другим, до окончания страницы
      for(let commit of body) {         //(1 стр содержит примерно = 30шт коммитов)
        yield commit;                   // (содержание коммита см ниже под кодом)             (синхронний генераторний вивід)
      }
      // break; // (посмотреть только одну страницу)
    }
}

// Пример использования (показывает авторов коммитов в консоли):
(async () => {  // запустимо асинхронний генератор fetchCommits(repo) асинхронним циклом for await..of

    let count = 0;
  
    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) { // перебор всех коммитов (всех страниц)
  
      // console.log(commit.author.login);
      // console.log(commit.author.avatar_url);  // (напр: https://avatars.githubusercontent.com/u/349336?v=4)
      // console.log(commit.author);
      console.log(commit);
  
      if (++count == 100) { // остановимся на 100 коммитах
        break;
      }
    }
  
})();

/*
Внутренняя механика постраничных запросов снаружи не видна. Для нас это просто асинхронный генератор, 
который возвращает коммиты.

Вид одиночного коммита (yield commit;), например:

{sha: '5dff42ba283bce883428c383c080fa9392b71df8', node_id: 'C_kwDOBY7uftoAKDVkZmY0MmJhMjgzYmNlODgzNDI4YzM4M2MwODBmYTkzOTJiNzFkZjg', commit: {…}, url: 'https://api.github.com/repos/javascript-tutorial/e…/commits/5dff42ba283bce883428c383c080fa9392b71df8', html_url: 'https://github.com/javascript-tutorial/en.javascri…o/commit/5dff42ba283bce883428c383c080fa9392b71df8', …}
author: {login: 'iliakan', id: 349336, node_id: 'MDQ6VXNlcjM0OTMzNg==', avatar_url: 'https://avatars.githubusercontent.com/u/349336?v=4', gravatar_id: '', …}
comments_url: "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits/5dff42ba283bce883428c383c080fa9392b71df8/comments"
commit: {author: {…}, committer: {…}, message: 'closes #3222', tree: {…}, url: 'https://api.github.com/repos/javascript-tutorial/e…/commits/5dff42ba283bce883428c383c080fa9392b71df8', …}
committer: {login: 'iliakan', id: 349336, node_id: 'MDQ6VXNlcjM0OTMzNg==', avatar_url: 'https://avatars.githubusercontent.com/u/349336?v=4', gravatar_id: '', …}
html_url: "https://github.com/javascript-tutorial/en.javascript.info/commit/5dff42ba283bce883428c383c080fa9392b71df8"
node_id: "C_kwDOBY7uftoAKDVkZmY0MmJhMjgzYmNlODgzNDI4YzM4M2MwODBmYTkzOTJiNzFkZjg"
parents: [{…}]
sha: "5dff42ba283bce883428c383c080fa9392b71df8"
url: "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits/5dff42ba283bce883428c383c080fa9392b71df8"
[[Prototype]]: Object

*/

alert("End");

