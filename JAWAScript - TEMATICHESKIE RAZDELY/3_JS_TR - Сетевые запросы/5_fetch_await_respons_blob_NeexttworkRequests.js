/* JawaScript - 5_fetch_await_respons_blob_NeexttworkRequests               

В качестве примера работы с бинарными данными, давайте запросим и выведем на экран аватар автора одного из коммитов
*/

'use strict';
alert("Start 5_fetch_await_respons_blob_NeexttworkRequests");           // НЕ РАБОТАЕТ  

(async () => {

// async function getBlob() {

  // blocked by CORS policy => Возьмем в качестве рисунка из массива коммитов аватар пользователя "login": "web-flow"
  let response = await fetch('https://avatars.githubusercontent.com/u/19864447?v=4'); 

  let blob = await response.blob(); // скачиваем как Blob-объект

  // создаём <img>
  let img = document.createElement('img');
  img.style = 'position:fixed;top:10px;left:10px;width:100px';
  document.body.append(img);

  // выводим на экран
  img.src = URL.createObjectURL(blob);  // создаем ссьілку на полученньій blob и присваиваем ее созданному img

  setTimeout(() => { // прячем через три секунды
    img.remove();
    URL.revokeObjectURL(img.src);
  }, 3000);

// }
// getBlob();

})();




alert("End");

/*
Мы можем выбрать только один метод чтения ответа.
Если мы уже получили ответ с response.text(), тогда response.json() не сработает, так как данные уже были обработаны.
*/

